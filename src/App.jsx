import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Islom from './components/Islom/Islom';
import Firdavs from './components/Firdavs/Firdavs';
import ProductList from './components/ProductList/ProductList';
import Ziyoda from './components/Ziyoda/Ziyoda';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="ilova">
      <section className="qahramon">
        <Header />
        <Main />
      </section>
      <Islom />
      <Firdavs />
      <ProductList />
      <Ziyoda />
      <Footer />
    </div>
  );
}

export default App;
