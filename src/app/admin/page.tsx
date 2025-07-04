
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { courseData } from '@/lib/data';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
  const { toast } = useToast();

  const showNotImplementedToast = () => {
    toast({
      variant: 'default',
      title: 'Feature Not Implemented',
      description: 'This functionality requires a database connection.',
    });
  };

  const handleAddCourse = () => {
    showNotImplementedToast();
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    showNotImplementedToast();
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Admin' }]} />
      <div className="mb-8 flex items-center gap-4">
        <ShieldCheck className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline">Admin Dashboard</h1>
          <p className="text-lg text-muted-foreground">Manage your courses and settings.</p>
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>View and add new courses to your platform.</CardDescription>
            </div>
            <Button onClick={handleAddCourse} size="sm">Add Course</Button>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Title</TableHead>
                    <TableHead className="text-right">Subjects</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseData.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell className="text-right">{course.subjects.length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Update application-wide settings.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleChangePin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pin">Change Access PIN</Label>
                <Input id="pin" type="password" placeholder="Enter new PIN" />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
