import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Add,
  Archive,
  Detail,
  Home,
  Login,
  NotFound,
  Register,
  Settings,
} from '@/pages';
import { getUserLogged, putAccessToken } from '@/lib/api';
import { useCustomToast } from '@/hooks/use-customtoast';

export default function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const { successToast } = useCustomToast();

  useEffect(() => {
    (async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    })();
  }, []);

  const handleLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    successToast('Successfully logged in', `Welcome, ${data.name}!`);
  };

  const handleLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    successToast('Successfully logged out');
  };

  if (initializing) return null;

  if (authedUser === null) {
    return (
      <Routes>
        <Route
          path='/*'
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path='/register' element={<Register />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/detail/:noteId' element={<Detail />} />
      <Route path='/add' element={<Add />} />
      <Route path='/settings' element={<Settings onLogout={handleLogout} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
