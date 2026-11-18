import { Link } from 'react-router';

export default function PageA() {
  return (
    <section className="page-content">    
      <h2>Yhdistetään itsenäiset ratkaisut</h2>
      <p>Loader hoitaa reittiin kuuluvan datan lataamisen ennen B:n näyttämistä. CSS huolehtii footerin vakaasta sijainnista riippumatta siitä, kuinka lyhyt A:n tai B:n sisältö on. Molemmat ratkaisevat eri ongelman.</p>
      <p className="tip">Huomaa sekä vanhan sivun säilyminen latauksen aikana että footerin pysyminen alhaalla.</p>
      <div className="actions">
        <Link className="primary-link" to="/combined/products/1">Avaa tuote 1 →</Link>
        <Link className="secondary-link" to="/combined/products/2">Avaa tuote 2 →</Link>
      </div>
      <p className="small">Linkit sisältävät tuotetunnuksen URL:ssa. Kokeile myös kopioida osoite ja avata se uuteen välilehteen.</p>
    </section>
  );
}
