
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
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import type { College } from './colleges-table';

interface CollegeDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  college?: College | null;
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}

export function CollegeDialog({
  isOpen,
  onOpenChange,
  college,
  action,
}: CollegeDialogProps) {
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

  const collegesJson = college?.colleges ? JSON.stringify(college.colleges, null, 2) : '';
  const subCategoriesJson = college?.subCategories ? JSON.stringify(college.subCategories, null, 2) : '';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{college ? 'Edit College Category' : 'Add New College Category'}</DialogTitle>
          <DialogDescription>
            {college
              ? 'Update the details of the college category.'
              : 'Fill in the details for the new college category.'}
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Category Title</Label>
            <Input id="title" name="title" defaultValue={college?.title} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="colleges">Colleges (JSON format)</Label>
            <Textarea
              id="colleges"
              name="colleges"
              defaultValue={collegesJson}
              placeholder='[{"name": "College A", "image": "/path/to/image.jpg"}]'
              className="h-32 font-mono text-xs"
            />
             <p className="text-xs text-muted-foreground">
              Leave this blank if you are using Sub-categories.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subCategories">Sub-categories (JSON format)</Label>
            <Textarea
              id="subCategories"
              name="subCategories"
              defaultValue={subCategoriesJson}
              placeholder='{"subCatKey": {"title": "Sub-Category Title", "colleges": [{"name": "College B", "image": "/path/to/image.jpg"}]}}'
              className="h-48 font-mono text-xs"
            />
            <p className="text-xs text-muted-foreground">
              Leave this blank if you are using a direct list of colleges.
            </p>
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
              {college ? 'Save Changes' : 'Create Category'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
