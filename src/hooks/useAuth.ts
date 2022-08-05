import { useLocalStorage } from '@mantine/hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  // const [auth, setAuth] = useState<any>(null);
  const [auth, setAuth] = useLocalStorage<any>({
    key: 'user',
    defaultValue: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (!auth) return null;
      setIsLoading(true);
      const res = await axios.get('http://localhost:8000/users/me', {
        headers: { Authorization: `Bearer ${JSON.parse(auth).user.token}` },
      });
      setIsLoading(false);
      if (res.status !== 200) return null;
      setAuth(JSON.stringify({ user: res.data }));
    })();
  }, []);
  return { auth: JSON.parse(auth), setAuth, isLoading };
};
