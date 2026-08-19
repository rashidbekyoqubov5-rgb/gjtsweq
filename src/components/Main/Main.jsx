import heroImage from '../../ChatGPT Image 19 авг. 2026 г., 16_34_20.png';
import './Main.css';

function Main() {
  return (
    <main className="asosiy-qahramon">
      <img
        className="qahramon-rasmi"
        src={heroImage}
        alt="Ozon sotuvchisi noutbuk bilan"
      />
      <div className="qahramon-mazmuni">
        <div className="qahramon-matni">
          <h1>
            Ozon’da o‘z biznesingizni<br />
            yangi imkoniyatlar bilan<br />
            boshlang
          </h1>
          <p className="qahramon-matni-izohi">
            Biznesingizni xalqaro miqyosga olib chiqing, hisob va moliyaviy masalalarni esa yashab turgan mamlakatingiz qoidalari bo‘yicha yuriting. Sizning auditoriyangiz — Rossiya va O‘zbekistonda bo‘ylab 67,3 milliondan ortiq xaridorlar.
          </p>
          <button className="asosiy-tugma">Bepul ro‘yxatdan o‘tish</button>
        </div>
      </div>
      <div className="statistika">
        <div className="statistika-sarlavhasi">
          Ozonning 2025-<br />yildagi o‘sishi
        </div>
        <div>
          <strong>4 marta</strong>
          <span>O‘zbekistondagi sotuvchilar aylanmasi oshdi</span>
        </div>
        <div>
          <strong>5 marta</strong>
          <span>O‘zbekistondagi sotuvchilar buyurtmalari soni oshdi</span>
        </div>
        <div>
          <strong>3,5 marta</strong>
          <span>O‘zbekistonda xaridorlar soni ko‘paydi</span>
        </div>
      </div>
    </main>
  );
}

export default Main;