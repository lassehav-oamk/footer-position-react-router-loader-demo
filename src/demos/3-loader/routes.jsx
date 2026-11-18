import { createBrowserRouter } from 'react-router';
import AppShell from '../../components/AppShell';
import NavigationProgress from '../../components/NavigationProgress';
import { getProduct } from '../../api/products';
import DemoLayout from './DemoLayout';
import PageA from './PageA';
import PageB from './PageB';

// Data Mode: createBrowserRouter + loader. Tämä router luodaan vain, kun /loader avataan.
export const createRouter = () => createBrowserRouter([
  {
    path: '/loader',
    element: <AppShell><NavigationProgress /><DemoLayout /></AppShell>,
    children: [
      { index: true, element: <PageA /> },
      {
        path: 'products/:id',
        element: <PageB />,
        // Ratkaisu: loader hakee datan ennen kuin PageB renderöidään.
        // Se saa id:n URL:sta ja välittää abort-signaalin fetchille.
        loader: ({ params, request }) => getProduct(params.id, request.signal),
      },
    ],
  },
]);
