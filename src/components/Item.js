import React from 'react';

import '../style/Item.css';

//Itens do cardapio 
//

import Item001 from '../assets/cardapio/item001.png';
import Item002 from '../assets/cardapio/item002.png';
import Item003 from '../assets/cardapio/item003.png';
import Item004 from '../assets/cardapio/item004.png';
import Item005 from '../assets/cardapio/item005.png';
import Item006 from '../assets/cardapio/item006.png';
import Item007 from '../assets/cardapio/item007.png';
import Item008 from '../assets/cardapio/item008.png';


// outras midias
import Star from '../assets/icons/star.svg';




export default function Item() {

    const cardapio_item =  require('../data/Lanches.json');
    let cardapio = []

    for(let i=0; i<cardapio_item.length; i++){
        cardapio.push(
            <li className="cardItem">
                 <img src={Item001}/>
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
        )
    }


    return(
        <>

            {cardapio}

        </>
    );
}