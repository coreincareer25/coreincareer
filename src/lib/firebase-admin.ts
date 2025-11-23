// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import type { App } from 'firebase-admin/app';
import type { Firestore } from 'firebase-admin/firestore';

// This is a singleton to ensure we only initialize the admin app once.
let adminApp: App;
let adminFirestore: Firestore;

function getServiceAccount() {
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!key) {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_KEY is not set in .env.local. Please follow the instructions in that file.'
    );
  }
  // The key might be in a stringified JSON format, so we parse it.
  try {
    return JSON.parse(key);
  } catch (e) {
    throw new Error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it is a valid JSON object.');
  }
}

export function getAdminApp(): App {
  if (adminApp) {
    return adminApp;
  }

  if (admin.apps.length > 0) {
    adminApp = admin.apps[0] as App;
    return adminApp;
  }

  const serviceAccount = getServiceAccount();

  adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  return adminApp;
}

export function getAdminFirestore(): Firestore {
  if (adminFirestore) {
    return adminFirestore;
  }
  adminFirestore = getAdminApp().firestore();
  return adminFirestore;
}
