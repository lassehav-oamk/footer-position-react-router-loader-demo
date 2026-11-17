import { Link, useLoaderData, useParams } from 'react-router';
import ProductDetails from '../components/ProductDetails';

export default function LoaderPageB({ mode }) {
  const product = useLoaderData(); // data tulee routerin loaderilta, ei A:n propsista
  const { id } = useParams();      // id tulee suoraan URL-polusta
  return (
    <section className="page-content">
      <span className="eyebrow">SIVU B · Ratkaisun kuvaus</span>
      <h2>{mode === 'combined' ? 'Loader ja CSS yhdessä' : 'Router loader lataa datan ensin'}</h2>
      <p><code>productLoader({`{ params, request }`})</code> luki tuotteen tunnuksen reitin <code>:id</code>-parametrista, teki API-pyynnön ja palautti tuotteen. Data Mode odotti loaderin valmistumista ennen B:n näyttämistä. B lukee valmiin vastauksen <code>useLoaderData()</code>-hookilla. A tietää vain linkin URL:n. <code>useParams()</code> kertoo B:lle myös tunnuksen ({id}).</p>
      <p>Komponentti B välittää tuotteen tavallisena propina lapselleen: <code>{'<ProductDetails product={product} />'}</code>. Propsit toimivat komponenttien välillä, mutta URL-parametri mahdollistaa sivun avaamisen suoraan osoitteella.</p>
      {mode === 'combined' ? (
        <p>Lisäksi Flexbox ja <code>min-height: 100vh</code> pitävät footerin ikkunan alareunassa, vaikka sisältöä olisi vähän. Loader ratkaisee navigoinnin ajoituksen, CSS asettelun.</p>
      ) : (
        <p>Huomaa: loader ei itsessään pidä footeria alhaalla. Lyhyellä sivulla se voi jäädä korkealle. Loader sen sijaan estää tässä tilanteessa B:n keskeneräisen latausnäkymän näyttämisen.</p>
      )}
      <div className="actions"><Link to={`/${mode}`}>← Takaisin A:han</Link><Link to={`/${mode}/products/${id === '1' ? '2' : '1'}`}>Vaihda tuotetta</Link></div>
      <ProductDetails product={product} />
    </section>
  );
}
