import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ProductDetails from './Pages/product-detail/product-detail.component';
import NotFoundPage from './Pages/not-found';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart/Cart';
import { useStateValue } from './State/StateProvider';
import ForgotPassword from './Pages/forgot-password/forgot-password';


function App() {

  const [{ cartStatus} , dispatch] = useStateValue();

  /* dispatch({
    type: 'SET_USER',
    user: authUser
  }) */


  return (
  <div>
  <Header />
  <Cart />
  { cartStatus === true ?
                <div className="cartOpen" onClick={() => dispatch({type: 'Cart_Status_Change'})}></div> :
                null
  }
  <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </div>
  

   
    // <div>
    //   Haris Ecome Applicatio
    //   <Footer></Footer>
    // </div>
  );
}

export default App;
