// Esimerkki propsien välittämisestä: B antaa saamansa datan lapsikomponentille.
// Prop ei tule A:lta, joten syvälinkitys toimii myös suoraan URL:sta.
export default function ProductDetails({ product, extended = false }) {
  return (
    <>
      <article className="product-card">
        <img src={product.thumbnail} alt={product.title} width="240" height="240" />
        <div>
          <p className="eyebrow">Tuote #{product.id}</p>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Hinta: {product.price} $</strong></p>
          <p>Kategoria: {product.category}</p>
          {extended && (
            <>
              <p>Merkki: {product.brand ?? '-'}</p>
              <p>Varastossa: {product.stock} kpl · Arvosana: {product.rating}</p>
              <p>Takuu: {product.warrantyInformation}</p>
              <p>Toimitus: {product.shippingInformation}</p>
              <p>Tagit: {product.tags?.join(', ')}</p>
            </>
          )}
        </div>
      </article>
      {extended && (
        <section>
          <h3>Arvostelut ({product.reviews?.length ?? 0})</h3>
          {product.reviews?.map((review, i) => (
            <div className="review" key={i}>
              <strong>{review.reviewerName}</strong> · {review.rating}/5
              <p>{review.comment}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
