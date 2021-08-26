import './App.css';
import React from 'react';
import './components/Header/Header.css';
import './components/Nav/Nav.css';
import './components/Main/Main.css';
import './components/Footer/Footer.css';
import Drawer from './components/Drawer/Drawer';
import Blouses from './components/Women/Blouses';
import Dresses from './components/Women/Dresses';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter, Route, Switch, } from 'react-router-dom';



function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems,] = React.useState([]);


  return (

    <>
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Nav />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main" component={Main} />
          <Route path="/blouses" component={Blouses} />
          <Route path="/dresses" component={Dresses} />
        </Switch>
      </HashRouter>
      <Footer />
    </>

  );
}

export default App;
