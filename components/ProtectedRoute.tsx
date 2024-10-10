'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';
import Loading from './Loading';

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
  return function WithAuth(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          router.push('/login');
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (!isAuthenticated) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;