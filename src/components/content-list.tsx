import type { Content } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleHelp, PlayCircle } from 'lucide-react';

interface ContentListProps {
    items: Content[];
    emptyMessage: string;
    onItemClick?: (item: Content) => void;
    isClickable?: (item: Content) => boolean;
    showPlayIcon?: (item: Content) => boolean;
}

export function ContentList({ items, emptyMessage, onItemClick, isClickable, showPlayIcon }: ContentListProps) {
    if (items.length === 0) {
        return (
            <div className="text-center py-16 bg-muted/50 rounded-lg">
                <CircleHelp className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {items.map(item => {
                const clickable = isClickable ? isClickable(item) : false;
                const displayPlayIcon = showPlayIcon ? showPlayIcon(item) : clickable;
                return (
                    <div
                        key={item.id}
                        onClick={clickable && onItemClick ? () => onItemClick(item) : undefined}
                        className={`${clickable ? 'cursor-pointer group' : ''}`}
                        role={clickable ? 'button' : undefined}
                        tabIndex={clickable ? 0 : undefined}
                        onKeyDown={clickable && onItemClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onItemClick(item) } : undefined}
                    >
                        <Card className="transition-shadow duration-200 hover:shadow-md group-hover:border-primary">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                    {displayPlayIcon && <PlayCircle className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />}
                                </div>
                            </CardHeader>
                            {item.description && (
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            )}
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}
