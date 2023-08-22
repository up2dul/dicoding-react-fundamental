import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Archive from '@/pages/Archive';
import Detail from '@/pages/Detail';
import Add from '@/pages/Add';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/detail/:noteId' element={<Detail />} />
        <Route path='/add' element={<Add />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
