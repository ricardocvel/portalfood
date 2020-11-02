import React from 'react';

import '../style/Item.css';

//Itens do cardapio 
//

import Item001 from '../assets/cardapio/item001.png';
import Item002 from '../assets/cardapio/item002.png';
import Item003 from '../assets/cardapio/item003.png';
import Item004 from '../assets/cardapio/item004.jpeg';
import Item005 from '../assets/cardapio/item005.jpeg';
import Item006 from '../assets/cardapio/item006.png';
import Item007 from '../assets/cardapio/item007.png';
import Item008 from '../assets/cardapio/item008.png';


// outras midias
import Star from '../assets/icons/star.svg';
import Whats from '../assets/whatsApp.png';
import Pedidos from '../assets/pedidos.png';
import Ifood from '../assets/ifoodLogo.png';

const Imagens  =[Item001, Item002, Item003, Item004, Item005, Item006, Item007, Item008]


export default function Item() {

    const cardapio_item =  require('../data/Lanches.json');
    let cardapio = []

    for(let i=0; i<cardapio_item.length; i++){
        cardapio.push(
            <li className="cardItem">
                 <img src={Imagens[i]}/>
        <h1>{cardapio_item[i].nome}</h1>
        <p>{cardapio_item[i].ingredientes}</p>
            <h1> R$ {cardapio_item[i].preco}</h1> 
                <div  className="cardStar">
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                </div>
                <div className="imgWhats" >
                    <a target="_blank" href={`https://web.whatsapp.com/send?phone=5548988719026`}> 
                        <img  src={Whats} /> 
                    </a>
                </div>
          </li>
        )
    }


    return(
        <>

            {cardapio}
            <li className="cardItem">
                <div className="imgWhats" >
                    <a target="_blank" href={`https://web.whatsapp.com/send?phone=5548988719026`}> 
                        <img  src={Pedidos} /> 
                    </a>
                </div>
                <div className="imgWhats" >
                    <a target="_blank" href={`https://www.ifood.com.br/delivery/sao-jose-sc/shawarmaria-maria-areias/22121795-2553-49b0-b4bf-2d068ec3c5ab?UTM_Medium=share`}> 
                        <img  src={Ifood} /> 
                    </a>
                </div>
          </li>

        </>
    );
}