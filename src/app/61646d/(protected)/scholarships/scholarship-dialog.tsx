
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
import type { Scholarship } from './actions';

interface ScholarshipDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  scholarship?: Scholarship | null;
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}

export function ScholarshipDialog({
  isOpen,
  onOpenChange,
  scholarship,
  action,
}: ScholarshipDialogProps) {
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
          <DialogTitle>{scholarship ? 'Edit Scholarship' : 'Add New Scholarship'}</DialogTitle>
          <DialogDescription>
            {scholarship
              ? 'Update the details of the scholarship.'
              : 'Fill in the details for the new scholarship.'}
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={scholarship?.title} required />
          </div>
           <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input id="subtitle" name="subtitle" defaultValue={scholarship?.subtitle} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={scholarship?.description}
              placeholder="Enter a brief description for the scholarship"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" name="amount" defaultValue={scholarship?.amount} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" name="image" defaultValue={scholarship?.image} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aiHint">AI Hint (for image search)</Label>
            <Input id="aiHint" name="aiHint" defaultValue={scholarship?.aiHint} />
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
              {scholarship ? 'Save Changes' : 'Create Scholarship'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
