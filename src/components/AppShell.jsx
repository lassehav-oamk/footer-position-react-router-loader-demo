const items = [
  ['problem', '1 · Ongelma'], ['css', '2 · CSS'],
  ['loader', '3 · Loader'], ['combined', '4 · Yhdistetty'],
];

// Yhteinen kehys kaikille demoille. Ei riipu routerista: valikko käyttää tavallisia
// linkkejä (sivun lataus), koska demot 1–2 ja 3–4 käyttävät eri router-instansseja.
export default function AppShell({ children }) {
  const path = window.location.pathname;
  return (
    <div className="app-shell">
      <div className="topbar">
        <a className="brand" href="/">Datan lataus ja näkymän vaihtodemo</a>
        <nav aria-label="Valitse demo">
          {items.map(([slug, label]) => (
            <a key={slug} href={`/${slug}`} className={path === `/${slug}` || path.startsWith(`/${slug}/`) ? 'active' : ''}>{label}</a>
          ))}
        </nav>
      </div>
      {children}
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
