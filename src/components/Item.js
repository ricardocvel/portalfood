import React from 'react';

import '../style/Item.css';


import Carne from '../assets/cardapio/CArne.png';
import Star from '../assets/icons/star.svg';



export default function Item() {
    return(
        <>
            <li className="cardItem">
                <img src={Carne}/>
                <h1>Shawarma de Carne</h1>
                <p>Pão Sírio, Carne suculenta , Tomate, Alface, 
                  Cebola Roxa, Batata frita, Molho de alho, Picles 
                  e  Temperos.</p>
                <h1> R$ 17,50</h1> 
                        <div  className="cardStar">
                          <img src={Star}/>
                          <img src={Star}/>
                          <img src={Star}/>
                          <img src={Star}/>
                          <img src={Star}/>
                        </div>
                        <a href={`https://github.com`}> Pedir por WhatsApp </a>
              </li>



              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>
              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>
              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>
              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>
              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>
              <li className="cardItem">
                <img src={Carne}/>
                <h1>teste</h1>
              </li>

        </>
    );
}