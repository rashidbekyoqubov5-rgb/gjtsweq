function ProductCard({ name, price, icon, color }) {
  return (
    <article className="product-card">
      <div className={`product-image ${color}`}>
        <span className="product-icon">{icon}</span>
        <button className="favorite-button" aria-label={`${name}ni sevimlilarga qo‘shish`}>♡</button>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>Ozon’dagi mashhur mahsulot</p>
        <strong>{price} so‘m</strong>
      </div>
    </article>
  );
}

export default ProductCard;