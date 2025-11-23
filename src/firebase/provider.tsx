// src/firebase/provider.tsx
'use client';

import {
  createContext,
  useContext,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

export type FirebaseProviderProps = PropsWithChildren<{
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}>;

const FirebaseContext = createContext<FirebaseProviderProps | undefined>(
  undefined
);

export function FirebaseProvider({
  children,
  ...props
}: PropsWithChildren<FirebaseProviderProps>) {
  return (
    <FirebaseContext.Provider value={props}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }

  return context;
}

export function useFirebaseApp() {
  return useFirebase().app;
}

export function useAuth() {
  return useFirebase().auth;
}

export function useFirestore() {
  return useFirebase().firestore;
}
