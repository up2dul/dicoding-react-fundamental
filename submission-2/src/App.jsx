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

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/detail/:noteId' element={<Detail />} />
      <Route path='/add' element={<Add />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
