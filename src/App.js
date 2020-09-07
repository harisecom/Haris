import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer.component';
import ForgotPassword from './Pages/forgot-password/forgot-password';
import RatingComponent from './Components/Rating/Rating';

function App() {
  return (
    <div className="app-site">
      <div className="content">
        <ForgotPassword></ForgotPassword>
      </div>
      <Footer />
    </div>
  );
}

export default App;
