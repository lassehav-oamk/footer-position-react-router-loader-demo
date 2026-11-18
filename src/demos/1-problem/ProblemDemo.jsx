import { Route, Routes } from 'react-router';
import DemoLayout from './DemoLayout';
import PageA from './PageA';
import PageB from './PageB';

// Declarative Mode: reitit määritellään JSX:llä (<Routes>/<Route>) ilman loaderia.
// Tämä komponentti sijoitetaan päärouterin (BrowserRouter) reitille /problem/*.
export default function ProblemDemo() {
  return (
    <Routes>
      <Route element={<DemoLayout />}>
        <Route index element={<PageA />} />
        <Route path="products/:id" element={<PageB />} />
      </Route>
    </Routes>
  );
}
