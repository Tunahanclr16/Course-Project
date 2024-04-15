// hooks/useAuth.js

import { useEffect, useState } from 'react';
import { auth } from '../firebase'; // Firebase projenizdeki authentication nesnesini içeri aktarın

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const logout = () => auth.signOut();

  return { user, logout };
}
