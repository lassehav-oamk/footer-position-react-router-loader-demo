import { createBrowserRouter } from 'react-router';
import AppShell from '../../components/AppShell';
import NavigationProgress from '../../components/NavigationProgress';
import { getProduct } from '../../api/products';
import DemoLayout from './DemoLayout';
import PageA from './PageA';
import PageB from './PageB';

// Data Mode: createBrowserRouter + loader. Tämä router luodaan vain, kun /combined avataan.
// Loader (datan ajoitus) + DemoLayout/layout.css (footerin sijainti).
export const createRouter = () => createBrowserRouter([
  {
    path: '/combined',
    element: <AppShell><NavigationProgress /><DemoLayout /></AppShell>,
    children: [
      { index: true, element: <PageA /> },
      {
        path: 'products/:id',
        element: <PageB />,
        // Loader saa id:n URL:sta ja välittää abort-signaalin fetchille.
        loader: ({ params, request }) => getProduct(params.id, request.signal),
      },
    ],
  },
]);
