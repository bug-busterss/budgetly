import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const user = localStorage.getItem('user');
      if (!user) return null;
      setIsLoading(true);
      const res = await axios.get('http://localhost:8000/users/me', {
        headers: { Authorization: `Bearer ${JSON.parse(user).token}` },
      });
      setIsLoading(false);
      if (res.status !== 200) return null;
      localStorage.setItem('user', JSON.stringify(res.data));
      setAuth({ isLoading, user: res.data });
    })();
  }, []);
  console.log(auth);
  return { auth, isLoading };
};
