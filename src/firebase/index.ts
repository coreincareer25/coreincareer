// src/firebase/index.ts
import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

import { firebaseConfig } from './config';

// These imports are required for the hooks to work
export {
  FirebaseProvider,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
} from './provider';
export { FirebaseClientProvider } from './client-provider';

// Add other hook exports here
// export { useCollection } from './firestore/use-collection';
// export { useDoc } from './firestore/use-doc';
// export { useUser } from './auth/use-user';

type FirebaseInstances = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

// This function is used to initialize Firebase on the client
// It's memoized to ensure that it's only called once
let firebase: FirebaseInstances;
export function initializeFirebase(): FirebaseInstances {
  if (firebase) {
    return firebase;
  }

  // To prevent re-initializing on hot reloads
  const apps = getApps();
  if (apps.length > 0) {
    const app = apps[0];
    firebase = {
      app,
      auth: getAuth(app),
      firestore: getFirestore(app),
    };

    return firebase;
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  firebase = { app, auth, firestore };
  return firebase;
}
