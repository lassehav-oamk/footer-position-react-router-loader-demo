import { Link } from 'react-router';

export default function PageA() {
  return (
    <section className="page-content">      
      <h2>Ratkaisu: loader hakee B:n tiedot ennen navigointia</h2>
      <p>Data Mode -reitillä oleva loader saa tuotetunnuksen URL:sta ja hakee tuotteen ennen kuin kohdereitti renderöidään. A ei hae B:n tietoja eikä välitä niitä propsina. Vanha sivu pysyy näkyvissä latauksen aikana. Koska tässä demossa ei ole CSS-korjausta, footerin sijainti riippuu silti sivun sisällön pituudesta.</p>
      <p className="tip">Klikkaa tuotetta ja huomaa: A jää näkyviin, kunnes B:n data on valmiina.</p>
      <div className="actions">
        <Link className="primary-link" to="/loader/products/1">Avaa tuote 1 →</Link>
        <Link className="secondary-link" to="/loader/products/2">Avaa tuote 2 →</Link>
      </div>
      <p className="small">Linkit sisältävät tuotetunnuksen URL:ssa. Kokeile myös kopioida osoite ja avata se uuteen välilehteen.</p>
    </section>
  );
}
