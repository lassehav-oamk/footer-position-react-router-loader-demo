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
      <div className="actions"><Link to="/problem">← Takaisin A:han</Link><Link to={`/problem/products/${id === '1' ? '2' : '1'}`}>Vaihda tuotetta</Link></div>
      {loading && <p role="status" className="loading-text">Ladataan tuotetta #{id}... </p>}
      {error && <p role="alert">Tuotteen lataaminen epäonnistui: {error.message}</p>}
      {product && (
        <>
          <span className="eyebrow">SIVU B · Ongelman kuvaus</span>
          <h2>Ei korjausta: footer hyppää</h2>
          <p>React Router siirtyy B:hen heti. <code>useEffect</code> hakee datan vasta B:n mounttauksen jälkeen. Kun sisältö on hetken lyhyt, normaali dokumenttivirta nostaa footerin sen perään. Tuotteen valmistuttua footer putoaa alemmaksi. Tässä tarkoituksella <strong>ei korjata</strong> käyttäytymistä.</p>
          <ProductDetails product={product} extended />
        </>
      )}
    </section>
  );
}
