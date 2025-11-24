
'use client';
import { useActionState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import type { Course } from './courses-table';

interface CourseDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  course?: Course | null;
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}

const categories = [
  'engineering',
  'medical',
  'computational',
  'nursing',
  'paramedical',
  'management',
  'others',
];

export function CourseDialog({
  isOpen,
  onOpenChange,
  course,
  action,
}: CourseDialogProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        onOpenChange(false);
      }
    }
  }, [state, toast, onOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{course ? 'Edit Course' : 'Add New Course'}</DialogTitle>
          <DialogDescription>
            {course
              ? 'Update the details of the course.'
              : 'Fill in the details for the new course.'}
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Course Name</Label>
            <Input id="name" name="name" defaultValue={course?.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={course?.description}
              placeholder="Enter a brief description for the course"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" defaultValue={course?.category} required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="colleges">Colleges (comma-separated)</Label>
            <Input
              id="colleges"
              name="colleges"
              defaultValue={course?.colleges.join(', ')}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {course ? 'Save Changes' : 'Create Course'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
