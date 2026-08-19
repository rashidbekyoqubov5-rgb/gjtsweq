import './Islom.css';

const benefits = [
  {
    title: 'Ozon’ning O‘zbekistondagi yuridik shaxsi bilan shartnoma',
    text: 'Biznesingizni rivojlantiring va o‘zingiz yashayotgan mamlakat qoidalari asosida hujjatlarni yuriting',
    image: 'http://ir-20.ozone.ru/s3/seller-promo-events/start_benefits_banner_1_desk_tablet.png',
    tone: 'qorongi katta',
  },
  {
    title: 'Jozibador tariflar',
    text: 'Marketplacega turli toifadagi tovarlar sotuvi uchun to‘lov 5% dan boshlanadi',
    image: 'http://ir-20.ozone.ru/s3/sx-landing-composer-static/wc400/0907_sellerkz_tarify.png',
    tone: 'yorug',
  },
  {
    title: 'Xalqaro miqyos',
    text: 'Tovarlaringizni O‘zbekiston va Rossiyadagi xaridorlarga soting',
    image: 'http://ir-20.ozone.ru/s3/sx-landing-composer-static/wc400/0907_sellerkz_international.png',
    tone: 'yorug',
  },
  {
    title: 'To‘lovlarning minimal cheklovi yo‘q',
    text: 'Sotuvdan pullaringizni istalgan hajmda yechib oling — hech qanday cheklovlar yo‘q',
    image: 'http://ir-20.ozone.ru/s3/sx-landing-composer-static/wc400/0907_sellerkz_vyplaty.png',
    tone: 'yorug',
  },
  {
    title: 'Shartlarni boshqarish',
    text: '2027-yil 1-iyulgacha qo‘shimcha to‘lovsiz obunani ulab, mijozlar ishonchini oshiring',
    image: 'http://ir-20.ozone.ru/s3/sx-landing-composer-static/wc400/2107_sellerkz_podpiska.png',
    tone: 'yorug',
  },
  {
    title: 'So‘mda barqaror to‘lovlar',
    text: 'Tovar sotilgandan 3 kundan so‘ng pullaringizni O‘zbekistondagi istalgan bankka qabul qilasiz',
    image: 'http://ir-20.ozone.ru/s3/sx-landing-composer-static/0907_sellerkz_som_desk_tab.png',
    tone: 'qorongi keng',
  },
];

function Islom() {
  return (
    <section className="afzalliklar-bolimi">
      <h2>Sotuvdagi muvaffaqiyatingiz uchun</h2>
      <div className="afzalliklar-togri">
        {benefits.map((benefit) => (
          <article className={`afzallik-kartasi ${benefit.tone}`} key={benefit.title}>
            <div className="afzallik-matni">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
            <img className="afzallik-rasmi" src={benefit.image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Islom;
