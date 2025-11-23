// src/firebase/client-provider.tsx
'use client';

import { FirebaseProvider, type FirebaseProviderProps } from './provider';
import { initializeFirebase } from '.';
import { memo } from 'react';

// This is a wrapper around the FirebaseProvider that initializes Firebase on the client
// and ensures that it is only initialized once.
function FirebaseClientProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebase = initializeFirebase();
  return <FirebaseProvider {...firebase}>{children}</FirebaseProvider>;
}

// Ensure that the provider is memoized so that it doesn't re-render
export const FirebaseClientProvider = memo(FirebaseClientProviderComponent);
