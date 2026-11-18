import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { getProduct } from '../../api/products';
import ProductDetails from '../../components/ProductDetails';

export default function PageB() {
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
      <div className="actions"><Link to="/css">← Takaisin A:han</Link><Link to={`/css/products/${id === '1' ? '2' : '1'}`}>Vaihda tuotetta</Link></div>
      {loading && <p role="status" className="loading-text">Ladataan tuotetta #{id}... </p>}
      {error && <p role="alert">Tuotteen lataaminen epäonnistui: {error.message}</p>}
      {product && (
        <>      
          <h2>CSS pitää footerin alhaalla</h2>
          <p>Data latautuu edelleen B:n <code>useEffect</code>-hookilla. Ulompi sivuasettelu käyttää <code>min-height: calc(100vh - 72px)</code> (ikkunan korkeus miinus yläpalkki ja marginaali), <code>display: flex</code>, <code>flex-direction: column</code> ja sisältöalueella <code>flex: 1</code>. Footer pysyy alhaalla myös latauksen aikana. CSS ei nopeuta datan hakemista.</p>
          <ProductDetails product={product} />
          <div className="placeholder">Placeholder-sisältö 1</div>
          <div className="placeholder">Placeholder-sisältö 2</div>
          <div className="placeholder">Placeholder-sisältö 3</div>
          <div className="placeholder">Placeholder-sisältö 4</div>
          <div className="placeholder">Placeholder-sisältö 5</div>
        </>
      )}
    </section>
  );
}
