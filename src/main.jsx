import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AppShell from './components/AppShell';
import DemoLayout from './components/DemoLayout';
import PageA from './pages/PageA';
import EffectPageB from './pages/EffectPageB';
import LoaderPageB from './pages/LoaderPageB';
import { productLoader } from './api/products';
import './style.css';

// Yksi Data Mode -router, jotta samaan sovellukseen voidaan tehdä neljä demoa.
// Demoissa 1 ja 2 käytetään Declarative Mode -tyylistä Link/useParams/useEffect-
// datanhakua. Ne eivät tarvitse loaderia. Loader-demoissa 3 ja 4 käytetään
// nimenomaan Data Mode -ominaisuutta. BrowserRouter + Routes eivät tue loaderia.
const routes = [
  {
    path: 'problem',
    element: <DemoLayout mode="problem" />,
    children: [
      { index: true, element: <PageA mode="problem" /> },
      { path: 'products/:id', element: <EffectPageB mode="problem" /> },
    ],
  },
  {
    path: 'css',
    element: <DemoLayout mode="css" />,
    children: [
      { index: true, element: <PageA mode="css" /> },
      { path: 'products/:id', element: <EffectPageB mode="css" /> },
    ],
  },
  {
    path: 'loader',
    element: <DemoLayout mode="loader" />,
    children: [
      { index: true, element: <PageA mode="loader" /> },
      { path: 'products/:id', element: <LoaderPageB mode="loader" />, loader: productLoader },
    ],
  },
  {
    path: 'combined',
    element: <DemoLayout mode="combined" />,
    children: [
      { index: true, element: <PageA mode="combined" /> },
      { path: 'products/:id', element: <LoaderPageB mode="combined" />, loader: productLoader },
    ],
  },
];

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <AppShell />, 
    children: [
      { index: true, element: <Intro /> },
      ...routes,
      { path: '*', element: <p>Sivua ei löytynyt.</p> },
    ]
  }
]);

function Intro() {
  return (
    <section className="intro">
      <h1>Footerin hyppiminen ja React Routerin datan lataaminen</h1>
      <p>Neljä esimerkkiä asiasta ja sen mahdollisista ratkaisuista. Kaikki hakevat DummyJSON-palvelusta tuotteen kahden sekunnin viiveellä. Vertaa, mitä käyttäjälle näkyy sillä aikaa.</p>
      <p>Demoissa 1–2 data haetaan komponentin <code>useEffect</code>-hookissa. Demoissa 3–4 reitti käyttää Routerin <code>loader</code>-funktiota. Hox! loader on käytettävissä vain jos router on ns. data mode -tilassa.</p>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
