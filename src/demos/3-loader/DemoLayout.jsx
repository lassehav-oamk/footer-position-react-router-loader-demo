import { Link, Outlet } from 'react-router';

// Ei CSS-korjausta: footerin sijainti riippuu sisällön pituudesta.
export default function DemoLayout() {
  return (
    <div className="demo-layout">
      <header className="demo-header">
        <h2>3. Loader: odota ennen sivun vaihtoa</h2>
        <Link to="/loader">Aloitussivu A</Link>
        <p className="solution-files">
          Lähdekoodi: <code>src/demos/3-loader/</code> (ratkaisu: <code>routes.jsx</code>, <code>PageB.jsx</code>)
        </p>
      </header>
      <main className="demo-content"><Outlet /></main>
      <footer className="demo-footer">FOOTER</footer>
    </div>
  );
}
