import React from 'react';
import './App.css';
// import ProductList from './features/product-list/ProductList';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import SignPage from './page/SignPage';

function App() {
  return (
    <div className="App">
    {/* <Home>

    </Home>
      */}
      <SignPage></SignPage>

      {/* <LoginPage>

      </LoginPage> */}
    </div>
  );
}

export default App;
