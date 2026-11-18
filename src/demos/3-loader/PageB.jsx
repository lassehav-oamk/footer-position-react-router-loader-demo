import { Link, useLoaderData, useParams } from 'react-router';
import ProductDetails from '../../components/ProductDetails';

export default function PageB() {
  const product = useLoaderData(); // data tulee routerin loaderilta, ei A:n propsista
  const { id } = useParams();      // id tulee suoraan URL-polusta
  return (
    <section className="page-content">
      <h2>Router loader lataa datan ensin</h2>
      <p>Reitin <code>loader</code> luki tuotteen tunnuksen reitin <code>:id</code>-parametrista, teki API-pyynnön ja palautti tuotteen. Data Mode odotti loaderin valmistumista ennen B:n näyttämistä. B lukee valmiin vastauksen <code>useLoaderData()</code>-hookilla. A tietää vain linkin URL:n. <code>useParams()</code> kertoo B:lle myös tunnuksen ({id}).</p>
      <p>Komponentti B välittää tuotteen tavallisena propina lapselleen: <code>{'<ProductDetails product={product} />'}</code>. Propsit toimivat komponenttien välillä, mutta URL-parametri mahdollistaa sivun avaamisen suoraan osoitteella.</p>
      <p>Huomaa: loader ei itsessään pidä footeria alhaalla. Lyhyellä sivulla se voi jäädä korkealle. Loader sen sijaan estää tässä tilanteessa B:n keskeneräisen latausnäkymän näyttämisen.</p>
      <div className="actions"><Link to="/loader">← Takaisin A:han</Link><Link to={`/loader/products/${id === '1' ? '2' : '1'}`}>Vaihda tuotetta</Link></div>
      <ProductDetails product={product} />
    </section>
  );
}
