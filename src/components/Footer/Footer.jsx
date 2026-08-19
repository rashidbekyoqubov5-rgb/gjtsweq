import './Footer.css';

function Footer() {
  return (
    <footer className="sayt-oyoq-qismi">
      <div className="oyoq-havolalari">
        <a href="#resources">Bilimlar bazasi</a>
        <a href="#resources">Vebinarlar va videolar</a>
        <a href="#resources">Skladlar manzili</a>
        <a href="#resources">Dasturchilar uchun</a>
        <strong>ozon</strong>
      </div>
      <div className="oyoq-talim-qismi">
        <div className="talim-kartasi">
          <span className="bitiruv-belgisi">⌑</span>
          <b>Ozon Ta’lim</b>
          <small>Yangi va tajribali<br />sotuvchilar uchun</small>
        </div>
        <div className="qr-kartasi">
          <img className="qr-rasmi" src="https://ir-20.ozone.ru/s3/seller-promo-events/ui/footer/v2/wc200/seller_app_qr_code.png" alt="Ilovani yuklab olish QR kodi" />
          <small>Kamerani yo‘naltiring,<br />ilovani yuklab oling</small>
        </div>
      </div>
      <div className="oyoq-meta-malumotlari">
        <div className="ijtimoiy-havolalar">
          <a href="https://t.me/ozon_uzbekistan" target="_blank" rel="noreferrer" title="Telegram">➤</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube">
            <img src="https://ir-20.ozone.ru/s3/seller-promo-events/ui/footer/v2/svg/wc75/ic_m_youtube_filled.svg" alt="YouTube" />
          </a>
        </div>
        <p>© 1998 – 2026 IP OOO «OMKOZB»<br />Barcha huquqlar himoyalangan<br />Shaxsiy ma’lumotlarni qayta ishlash shartlari</p>
      </div>
    </footer>
  );
}

export default Footer;