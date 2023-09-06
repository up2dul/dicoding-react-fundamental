import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import { Add, Archive, Detail, Home, NotFound } from '@/pages';

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
