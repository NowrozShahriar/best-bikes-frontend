import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllProducts from './pages/AllProducts/AllProducts';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import PrivateRoute from './pages/login/PrivateRoute/PrivateRoute';
import Register from './pages/login/Register/Register';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/all-products">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
