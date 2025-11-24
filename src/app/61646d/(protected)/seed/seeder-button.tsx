
// src/app/61646d/(protected)/seed/seeder-button.tsx
'use client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface SeederButtonProps {
    actionName: string;
    pending: boolean;
}

export function SeederButton({ actionName, pending }: SeederButtonProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pending) {
      setProgress(0);
      // Simulate progress animation
      timer = setTimeout(() => setProgress(30), 100);
      const timer2 = setTimeout(() => setProgress(75), 500);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      }
    } else {
      // When not pending, if progress was > 0, it means we were loading.
      // Animate to 100 and then reset.
      if (progress > 0) {
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      }
    }
    return () => clearTimeout(timer);
  }, [pending]);

  return (
    <div className="space-y-2">
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
      {pending && <Progress value={progress} className="h-2" />}
    </div>
  );
}
