import { Route, Routes } from 'react-router';
import DemoLayout from './DemoLayout';
import PageA from './PageA';
import PageB from './PageB';

export default function CssDemo() {
  return (
    <Routes>
      <Route element={<DemoLayout />}>
        <Route index element={<PageA />} />
        <Route path="products/:id" element={<PageB />} />
      </Route>
    </Routes>
  );
}
