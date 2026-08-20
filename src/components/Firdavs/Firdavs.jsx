import './Firdavs.css';

const steps = [
  { number: '1', title: 'Tovarlarni tanlash', active: true },
  { number: '2', title: 'Ro‘yxatdan o‘tish', note: '3 daqiqa' },
  { number: '3', title: 'Tovarlarni yuklash', note: '30 daqiqa' },
  { number: '4', title: 'Sotuvni tashkil etish', note: '5 daqiqa' },
];

function Firdavs() {
  return (
    <section className="sotuv-bolimi">
      <h2>Ozon’da sotish oson</h2>
      <div className="qadamlar-navigatsiyasi">
        {steps.map((step) => (
          <div className={`qadam-elementi ${step.active ? 'faol' : ''}`} key={step.number}>
            <span>{step.number} – {step.title}</span>
            {step.note && <small>◷ {step.note}</small>}
          </div>
        ))}
      </div>
      <div className="sotuv-paneli">
        <div className="sotuv-kirish">
          <h3>Tovarlarni tanlang</h3>
          <p>«Ozon’da nima sotish kerak» bepul xizmatimizda tovarlar sotuvi bo‘yicha tahlilni ko‘rib, o‘zingizga ma’qulini tanlashingiz va bo‘lajak daromadlaringizni ham hisoblash mumkin.</p>
          <p>Ushbu xizmatdan foydalanish uchun telefon raqami yordamida ro‘yxatdan o‘tish kifoya.</p>
        </div>
        <article className="xizmat-kartasi">
          <h3>Bepul tahlil xizmati</h3>
          <img className="xizmat-rasmi" src="https://ir-20.ozone.ru/s3/seller-promo-events/wc800/onboarding_steps_free_analytics_x3.png" alt="Bepul tahlil xizmati" />
          <span className="xizmat-strelkasi">→</span>
        </article>
        <article className="xizmat-kartasi">
          <h3>Ozon tariflari</h3>
          <img className="xizmat-rasmi" src="https://ir-20.ozone.ru/s3/seller-promo-events/wc800/onboarding_steps_calculator_x3.png" alt="Ozon tariflari kalkulyatori" />
          <span className="xizmat-strelkasi">→</span>
        </article>
      </div>
      <a className="telegram-eloni" href="https://t.me/ozon_uzbekistan" target="_blank" rel="noreferrer">
        <span className="telegram-belgisi"></span>
        <strong>O‘zbekistonlik sotuvchilar uchun Telegram kanalimizga obuna bo‘ling</strong>
        <span className="telegram-strelkasi">→</span>
      </a>
    </section>
  );
}

export default Firdavs;
