import React from 'react'

import { connect } from 'react-redux';
import { Creators as ACTIONS } from '../../store/ducks/cart';

const ProductCard = props => {
  const handleAddToCard = (item, price, quantity) => {
    // console.log(props.cart.products);
    // console.log(props.cart.products.item?.entry_number);
    
    // const entry = props.cart.products.item?.entry_number.findIndex((element) => {
    //   console.log(element) 
    //     return element == item?.entry_number;
    // });

    const entry = props.cart.products.filter(element => {
      console.log(element);
        return element.item.entry_number === item.entry_number
    })
    
    // console.log(entry);
    // if(entry){
        // }else{
            // }
            
    if(entry.length){    
        console.log('já tem o prod')
      }else{
        props.dispatch(ACTIONS.addProduct({item,price,quantity}));
      }


    
  }

  return (
    <li data-key={props.item.entry_number} className="poke-item">
      <a href={props.item.pokemon_species.url}>{props.item.pokemon_species.name}</a>
      <div>R${props.price}</div>
      <button 
        data-key={props.item.entry_number} 
        onClick={() => handleAddToCard(props.item, props.price, props.quantity)}>Comprar</button>
    </li>
  )
}

// export default ProductCard
export default connect(props => ({ ...props }))(ProductCard);

