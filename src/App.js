import React from 'react';

import './style/Global.css';
import './style/App.css';

import Header from './Header';
//import Itens from './components/Item';
import Carne from './assets/cardapio/CArne.png'

function App() {
  return (
    <> 
      <Header/>
      <div>
        <div className="cardapio">
          <ul>
              <li className="cardItem">
                <img src={Carne}/>
                  <h1>teste</h1>
              </li>
              <li className="cardItem">
                  <h1>teste</h1>
              </li>
              <li className="cardItem">
                  <h1>teste</h1>
              </li>
              <li className="cardItem">
                  <h1>teste</h1>
              </li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default App;
