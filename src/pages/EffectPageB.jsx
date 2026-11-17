import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { getProduct } from '../api/products';
import ProductDetails from '../components/ProductDetails';

export default function EffectPageB({ mode }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setProduct(null);
    setError(null);
    getProduct(id, controller.signal)
      .then(setProduct)
      .catch(err => { if (!controller.signal.aborted) setError(err); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [id]);

  return (
    <section className="page-content">
      
      <div className="actions"><Link to={`/${mode}`}>← Takaisin A:han</Link><Link to={`/${mode}/products/${id === '1' ? '2' : '1'}`}>Vaihda tuotetta</Link></div>
      {loading && <p role="status" className="loading-text">Ladataan tuotetta #{id}... </p>}
      {error && <p role="alert">Tuotteen lataaminen epäonnistui: {error.message}</p>}
      {product && (
        <>
          <span className="eyebrow">SIVU B · Ratkaisun kuvaus</span>
          <h2>{mode === 'problem' ? 'Ei korjausta: footer hyppää' : 'CSS pitää footerin alhaalla'}</h2>
          {mode === 'problem' ? (
            <p>React Router siirtyy B:hen heti. <code>useEffect</code> hakee datan vasta B:n mounttauksen jälkeen. Kun sisältö on hetken lyhyt, normaali dokumenttivirta nostaa footerin sen perään. Tuotteen valmistuttua footer putoaa alemmaksi. Tässä tarkoituksella <strong>ei korjata</strong> käyttäytymistä.</p>
          ) : (
            <p>Data latautuu edelleen B:n <code>useEffect</code>-hookilla. Ulompi sivuasettelu käyttää <code>min-height: 100vh</code>, <code>display: flex</code>, <code>flex-direction: column</code> ja sisältöalueella <code>flex: 1</code>. Footer pysyy alhaalla myös latauksen aikana. CSS ei nopeuta datan hakemista.</p>
          )}
          <ProductDetails product={product} extended={mode === 'problem'} />
        </>
      )}
    </section>
  );
}
