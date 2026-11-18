import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes, RouterProvider } from 'react-router';
import AppShell from './components/AppShell';
import ProblemDemo from './demos/1-problem/ProblemDemo';
import CssDemo from './demos/2-css/CssDemo';
import { createRouter as createLoaderRouter } from './demos/3-loader/routes';
import { createRouter as createCombinedRouter } from './demos/4-combined/routes';
import './style.css';


function Intro() {
  return (
    <section className="intro">
      <h1>Footerin hyppiminen ja React Routerin datan lataaminen</h1>
      <p>Neljä esimerkkiä asiasta ja sen mahdollisista ratkaisuista. Kaikki hakevat DummyJSON-palvelusta tuotteen yhden sekunnin viiveellä. Vertaa, mitä käyttäjälle näkyy sillä aikaa.</p>
      <p>Demoissa 1–2 data haetaan komponentin <code>useEffect</code>-hookissa ja reitit on määritelty Declarative Modella (<code>BrowserRouter</code>, <code>Routes</code>). Demoissa 3–4 reitti käyttää Routerin <code>loader</code>-funktiota. Hox! loader on käytettävissä vain jos router on ns. data mode -tilassa (<code>createBrowserRouter</code>).</p>
    </section>
  );
}

function DeclarativeApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell><Outlet /></AppShell>}>
          <Route index element={<Intro />} />
          <Route path="problem/*" element={<ProblemDemo />} />
          <Route path="css/*" element={<CssDemo />} />
          <Route path="*" element={<p>Sivua ei löytynyt.</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const path = window.location.pathname;

let app;
if (path.startsWith('/loader')) {
  app = <RouterProvider router={createLoaderRouter()} />;
} else if (path.startsWith('/combined')) {
  app = <RouterProvider router={createCombinedRouter()} />;
} else {
  app = <DeclarativeApp />;
}

createRoot(document.getElementById('root')).render(app);
