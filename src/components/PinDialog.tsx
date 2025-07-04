'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LockKeyhole } from 'lucide-react';
import { useState } from 'react';

const PinSchema = z.object({
  pin: z.string().min(1, { message: 'PIN is required.' }),
});

export function PinDialog() {
  const { login } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PinSchema>>({
    resolver: zodResolver(PinSchema),
    defaultValues: {
      pin: '',
    },
  });

  const onSubmit = (values: z.infer<typeof PinSchema>) => {
    setIsLoading(true);
    setTimeout(() => { // Simulate network delay
        const success = login(values.pin);
        if (!success) {
          toast({
            variant: 'destructive',
            title: 'Incorrect PIN',
            description: 'The PIN you entered is incorrect. Please try again.',
          });
        }
        setIsLoading(false);
        form.reset();
    }, 500);
  };

  return (
    <Dialog open={true}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        hideCloseButton={true}
      >
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <LockKeyhole className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">Access Required</DialogTitle>
          <DialogDescription className="text-center">
            Please enter the PIN to access the website.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">PIN</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter PIN"
                      className="text-center text-lg"
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Unlock'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
