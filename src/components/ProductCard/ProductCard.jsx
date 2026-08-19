import './ProductCard.css';

function ProductCard({ name, price, icon, color }) {
  return (
    <article className="mahsulot-kartasi">
      <div className={`mahsulot-rasmi ${color}`}>
        <span className="mahsulot-belgisi">{icon}</span>
        <button className="sevimli-tugmasi">♡</button>
      </div>
      <div className="mahsulot-malumoti">
        <h3>{name}</h3>
        <p>Ozon’dagi mashhur mahsulot</p>
        <strong>{price} so‘m</strong>
      </div>
    </article>
  );
}

export default ProductCard;