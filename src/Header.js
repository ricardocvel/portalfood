import React from 'react';

import './style/Header.css';

import Lupa from './assets/icons/search.svg';
import Logo from './assets/logoColor.png';

export default function Header() {
    return(
        <div id="header">
            <div> 
                
                <h1>Shawarmaria</h1>
            </div>
            <div className="containerright"> 
                <div className="pesquisar">
                    <img src={Lupa}/>
                    <input></input>
                </div>
            </div>
        </div>
    );
}