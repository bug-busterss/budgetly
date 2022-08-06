import { useLocalStorage } from '@mantine/hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import superjson from 'superjson';

export const useAuth = () => {
  // const [auth, setAuth] = useState<any>(null);
  const [auth, setAuth] = useLocalStorage<any>({
    key: 'user',
    defaultValue: null,
    serialize: superjson.stringify,
    deserialize: str => (str === undefined ? null : superjson.parse(str)),
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (!auth) return null;
      setIsLoading(true);
      const res = await axios.get('http://localhost:8000/users/me', {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      setIsLoading(false);
      if (res.status !== 200) return null;
      setAuth(res.data);
    })();
  }, []);
  console.log({ auth });
  return { auth, setAuth, isLoading };
};
