function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">ozon seller</a>
      <div className="header-controls"><button className="select-button">🇺🇿 &nbsp;O‘zbekiston <span>⌄</span></button><button className="language-button">◉ o‘zbek</button></div>
      <nav className="navigation" aria-label="Asosiy navigatsiya"><a href="#benefits">Afzalliklar</a><a href="#start">Qanday boshlash kerak</a><a href="#faq">Savol-javoblar</a><a href="#training">Ta’lim⌄</a></nav>
      <div className="auth-actions"><button className="login-button">Kirish</button><button className="register-button">Ro‘yxatdan o‘tish</button></div>
    </header>
  );
}

export default Header;