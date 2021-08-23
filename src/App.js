import './App.css';
import './components/Header/Header.css';
import './components/Nav/Nav.css';
import './components/Main/Main.css';
import './components/Footer/Footer.css';
// import Blouses2 from './components/Women/Blouses2';
import Blouses3 from './components/Women/Blouses3';
import Dresses from './components/Women/Dresses';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter, Route, Switch, } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Nav />

      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main" component={Main} />
          <Route path="/blouses" component={Blouses3} />
          <Route path="/dresses" component={Dresses} />
        </Switch>
      </HashRouter>

      <Footer />

    </>
  );
}

export default App;
