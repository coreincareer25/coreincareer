// src/firebase/firestore/use-collection.tsx
'use client';
import { useState, useEffect } from 'react';
import {
  onSnapshot,
  query,
  collection,
  type DocumentData,
  type Query,
  getDocs,
} from 'firebase/firestore';
import { useFirestore } from '../provider';

interface DocWithId extends DocumentData {
  id: string;
}

export function useCollection(q: Query | null) {
  const [data, setData] = useState<DocWithId[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!q) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as DocWithId)
        );
        setData(docs);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching collection:', err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [q]);

  return { data, loading, error };
}
