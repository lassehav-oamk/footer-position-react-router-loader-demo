import { Link, Outlet } from 'react-router';

const titles = {
  problem: '1. Ongelma: footer hyppää',
  css: '2. CSS: footer pysyy alhaalla',
  loader: '3. Loader: odota ennen sivun vaihtoa',
  combined: '4. Loader + CSS',
};

export default function DemoLayout({ mode }) {
  return (
    <div className={`demo-layout ${mode === 'css' || mode === 'combined' ? 'stable-layout' : ''}`}>
      <header className="demo-header">        
        <h2>{titles[mode]}</h2>
        <Link to={`/${mode}`}>Aloitussivu A</Link>
      </header>
      <main className="demo-content"><Outlet /></main>
      <footer className="demo-footer">FOOTER</footer>
    </div>
  );
}
