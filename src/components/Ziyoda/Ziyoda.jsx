import { useState } from 'react';
import './Ziyoda.css';
import { questions } from '../../data/Product';

function Ziyoda() {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="savol-javob-bolimi">
			<h2>Savollar va Javoblar</h2>
			<div className="savol-javob-royxati">
				{questions.map((item, index) => {
					const isOpen = openIndex === index;

					return (
						<article className="savol-javob-elementi" key={item.question}>
							<button
								className="savol-tugmasi"
								onClick={() => setOpenIndex(isOpen ? -1 : index)}
							>
								<span>{item.question}</span>
								<b>{isOpen ? '−' : '+'}</b>
							</button>
							{isOpen && <p className="savol-javobi">{item.answer}</p>}
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Ziyoda;
