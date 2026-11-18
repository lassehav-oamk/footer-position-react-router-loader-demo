import { Link, Outlet } from 'react-router';
import './layout.css';

// Ratkaisu: luokka stable-layout (katso layout.css) pitää footerin alhaalla.
export default function DemoLayout() {
  return (
    <div className="demo-layout stable-layout">
      <header className="demo-header">
        <h2>2. CSS: footer pysyy alhaalla</h2>
        <Link to="/css">Aloitussivu A</Link>
        <p className="solution-files">
          Lähdekoodi: <code>src/demos/2-css/</code> (ratkaisu: <code>layout.css</code>)
        </p>
      </header>
      <main className="demo-content"><Outlet /></main>
      <footer className="demo-footer">FOOTER</footer>
    </div>
  );
}
