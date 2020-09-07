import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import CartPage from './pages/cart';
import ShopPage from './pages/shop';
import NotFoundPage from './pages/not-found';
import Footer from './Components/Footer/Footer.component';
import ForgotPassword from './Pages/forgot-password/forgot-password';
import RatingComponent from './Components/Rating/Rating';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
    // <div>
    //   Haris Ecome Applicatio
    //   <Footer></Footer>
    // </div>
  );
}

export default App;
