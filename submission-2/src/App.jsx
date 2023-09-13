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
import { useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from './lib/api';

export default function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    onLogin();
  }, []);

  const onLogin = async () => {
    const { data } = await getUserLogged();

    setAuthedUser(data);
    setInitializing(false);
  };

  const handleLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const handleLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
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
