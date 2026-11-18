import { Link, Outlet } from 'react-router';

// Ei korjausta: footer sijoittuu normaalin dokumenttivirran mukaan sisällön perään.
export default function DemoLayout() {
  return (
    <div className="demo-layout">
      <header className="demo-header">
        <h2>1. Ongelma: footer hyppää</h2>
        <Link to="/problem">Aloitussivu A</Link>
        <p className="solution-files">
          Lähdekoodi: <code>src/demos/1-problem/</code>
        </p>
      </header>
      <main className="demo-content"><Outlet /></main>
      <footer className="demo-footer">FOOTER</footer>
    </div>
  );
}
