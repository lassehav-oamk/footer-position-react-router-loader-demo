import { Link } from 'react-router';

export default function PageA() {
  return (
    <section className="page-content">      
      <h2>Ongelma: B renderöidään ennen kuin data saapuu</h2>
      <p>Kun klikkaat tuotetta, React Router vaihtaa heti sivulle B. B:n useEffect käynnistää API-haun vasta komponentin mounttauksen jälkeen. B näyttää aluksi vain lataustekstin. Koska sisältöä on vähän, footer nousee heti headerin alle. Datan saavuttua sisältö kasvaa ja footer siirtyy alas. Tämä näyttää välähdykseltä.</p>
      <p className="tip">Katso footerin paikkaa ennen linkin klikkausta, latauksen aikana ja latauksen jälkeen.</p>
      <div className="actions">
        <Link className="primary-link" to="/problem/products/1">Avaa tuote 1 →</Link>
        <Link className="secondary-link" to="/problem/products/2">Avaa tuote 2 →</Link>
      </div>
      <p className="small">Linkit sisältävät tuotetunnuksen URL:ssa. Kokeile myös kopioida osoite ja avata se uuteen välilehteen.</p>
      <div className="placeholder">Placeholder-sisältö 1</div>
      <div className="placeholder">Placeholder-sisältö 2</div>
      <div className="placeholder">Placeholder-sisältö 3</div>
      <div className="placeholder">Placeholder-sisältö 4</div>
      <div className="placeholder">Placeholder-sisältö 5</div>
    </section>
  );
}
