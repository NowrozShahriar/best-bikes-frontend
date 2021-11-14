import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts/AllProducts';
import Home from './pages/home/Home/Home';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/all-products">
            <AllProducts></AllProducts>
          </Route>
          <Route>

          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
