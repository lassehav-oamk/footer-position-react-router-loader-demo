import { Link, Outlet } from 'react-router';
import './layout.css';

// CSS-osuus ratkaisusta: stable-layout (katso layout.css) pitää footerin alhaalla.
export default function DemoLayout() {
  return (
    <div className="demo-layout stable-layout">
      <header className="demo-header">
        <h2>4. Loader + CSS</h2>
        <Link to="/combined">Aloitussivu A</Link>
        <p className="solution-files">
          Lähdekoodi: <code>src/demos/4-combined/</code> (ratkaisu: <code>routes.jsx</code>, <code>layout.css</code>)
        </p>
      </header>
      <main className="demo-content"><Outlet /></main>
      <footer className="demo-footer">FOOTER</footer>
    </div>
  );
}
