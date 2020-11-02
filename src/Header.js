import React from 'react';

import './style/Header.css';

import Lupa from './assets/icons/search.svg';
import Instagram from './assets/svg/instagram.svg'; 
import Facebook from './assets/svg/facebook.svg';
import Location from './assets/svg/location-pin.svg';


import Logo from './assets/logoCinza.png';
import LogoR from './assets/logolanche.png';

export default function Header() {
    return(
        <div id="header">
            <div className="containerleft"> 
                <img src={LogoR}/>
            </div>
            <div className="containerright"> 
                <div className="pesquisar">
                    <input placeholder='Pesquisar' ></input>
                    <img src={Lupa}/>

                    <img src={Instagram}/>
                    <img src={Facebook}/>
                </div>
                <div className="titulo">
                    <div>
                        <h1>BEM VINDO A SHAWARMARIA</h1>
                        <h2>Escolha o item de sua preferencia e clique no botão </h2>
                        <h2>Para pedir pelo Whatsapp</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}