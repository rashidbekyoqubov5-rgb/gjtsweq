import './ProductList.css';
import { resources } from '../../data/Product';

function ProductList() {
	return (
		<section className="manbalar-bolimi">
			<h2>Sotuvdagi muvaffaqiyatingiz uchun</h2>
			<div className="manbalar-taxtasi">
				<div className="manbalar-royxati">
					{resources.map((resource) => (
						<a className="manba-kartasi" href="#resources" key={resource.title}>
							<span>
								<strong>{resource.title}</strong>
								<small>{resource.text}</small>
							</span>
							<b>→</b>
						</a>
					))}
				</div>
				<a className="manba-asosiy" href="#resources">
					<span>
						<strong>Ko‘proq materiallar</strong>
						<small>Qanday qilib Ozon’da savdoni tezda boshlash mumkin</small>
					</span>
					<i>→</i>
					<img className="manba-rasmi" src="https://ir-20.ozone.ru/s3/seller-promo-events/wc400/more_articles_img.png" alt="Ko‘proq materiallar" />
				</a>
			</div>
		</section>
	);
}

export default ProductList;
