import './Header.css';

function Header() {
  return (
    <header className="sayt-boshi">
      <a className="brend" href="/">ozon seller</a>
      <div className="sarlavha-boshqaruvlari">
        <button className="tanlash-tugmasi">🇺🇿 &nbsp;O‘zbekiston <span>⌄</span></button>
        <button className="til-tugmasi"> o‘zbek</button>
      </div>
      <nav className="navigatsiya">
        <a href="#benefits">Afzalliklar</a>
        <a href="#start">Qanday boshlash kerak</a>
        <a href="#faq">Savol-javoblar</a>
        <a href="#training">Ta’lim⌄</a>
      </nav>
      <div className="kirish-amallari">
        <button className="kirish-tugmasi">Kirish</button>
        <button className="royxatdan-otish-tugmasi">Ro‘yxatdan o‘tish</button>
      </div>
    </header>
  );
}

export default Header;