// src/app/admin/(protected)/seed/seeder-button.tsx
'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SeederButtonProps {
    actionName: string;
}

export function SeederButton({ actionName }: SeederButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Seeding {actionName}...
        </>
      ) : (
        `Seed ${actionName}`
      )}
    </Button>
  );
}
