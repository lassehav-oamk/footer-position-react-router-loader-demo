import { Link } from 'react-router';

export default function PageA() {
  return (
    <section className="page-content">      
      <h2>Ongelma sama, mutta asettelu korjataan CSS:llä</h2>
      <p>B hakee edelleen datan vasta mounttauksen jälkeen. Tyhjän sisältöalueen korkeus vaihtelisi kuten ensimmäisessä demossa, ellei sivun Flexbox-asettelu varaisi main-alueelle jäljelle jäävää korkeutta.</p>
      <p className="tip">Katso, kuinka footer pysyy ikkunan alareunassa silloinkin, kun B näyttää vain lataustekstin.</p>
      <div className="actions">
        <Link className="primary-link" to="/css/products/1">Avaa tuote 1 →</Link>
        <Link className="secondary-link" to="/css/products/2">Avaa tuote 2 →</Link>
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
