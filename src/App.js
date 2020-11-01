import React from 'react';

import './style/Global.css';
import './style/App.css';

import Header from './Header';
import Itens from './components/Item';

import Titulo from './assets/logoColor.png';

function App() {
  return (
    <> 
      <Header/>
      <div>
        <div className="cardapio">
          <ul>
              <Itens/>
          </ul>
        </div>
      </div>
    </>

  );
}

export default App;
