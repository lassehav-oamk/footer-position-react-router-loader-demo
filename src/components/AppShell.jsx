import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router';

const items = [
  ['problem', '1 · Ongelma'], ['css', '2 · CSS'],
  ['loader', '3 · Loader'], ['combined', '4 · Yhdistetty'],
];

export default function AppShell() {
  const navigation = useNavigation();
  return (
    <div className="app-shell">
      <div className="topbar">
        <a className="brand" href="/">Datan lataus ja näkymän vaihtodemo</a>
        <nav aria-label="Valitse demo">
          {items.map(([slug, label]) => <NavLink key={slug} to={`/${slug}`} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
        </nav>
      </div>
      {navigation.state !== 'idle' && (
        <div className="navigation-progress" role="status">
          Router lataa seuraavaa sivua... edellinen sivu pysyy näkyvissä.
        </div>
      )}
      <Outlet />
      <aside className="references">
        <h3>Dokumentaatio</h3>
        <a href="https://reactrouter.com/start/modes" target="_blank" rel="noreferrer">React Router: Declarative ja Data Mode ↗</a>
        <a href="https://reactrouter.com/start/data/data-loading" target="_blank" rel="noreferrer">React Router: Data loading ↗</a>
        <a href="https://reactrouter.com/api/hooks/useLoaderData" target="_blank" rel="noreferrer">React Router: useLoaderData ↗</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length#vh" target="_blank" rel="noreferrer">MDN: vh, dvh ja muut viewport-yksiköt ↗</a>
        <a href="https://dummyjson.com/docs" target="_blank" rel="noreferrer">DummyJSON: API ja delay-parametri ↗</a>
      </aside>
    </div>
  );
}
