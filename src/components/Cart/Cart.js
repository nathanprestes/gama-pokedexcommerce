import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { Creators as ACTIONS } from '../../store/ducks/cart';

import './Cart.css';

const Cart = (props) => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.cart.products);
  }, [props.cart.products]);

  const handleIncrementQuantity = (id, price) => {
    const produto = products.find(product => product.item.entry_number === id);
    produto.quantity += 1;
    console.log(price + price);
    props.dispatch(ACTIONS.incrementQuantity(produto));
  }

  const handleDecrementQuantity = (id, price) => {
    const produto = products.find(product => product.item.entry_number === id);
    produto.quantity -= 1;
    
    if (produto.quantity <= 0) {
      produto.quantity = 1;
    }


    props.dispatch(ACTIONS.decrementQuantity(produto));
  }
  

  return (
    <div className="cart">
        <div className="cart-title">Minha Pokedex</div>
        <div className="cart-list">
            <ul>
                {products.map((pokemon, index) => (
                    <li key={pokemon.item.entry_number}>{pokemon.item.pokemon_species.name} - 
                      <button onClick={() => handleDecrementQuantity(pokemon.item.entry_number, pokemon.price)}>-</button>
                        {pokemon.quantity}
                      <button onClick={() => handleIncrementQuantity(pokemon.item.entry_number, pokemon.price)}>+</button>
                        Qtd - R${pokemon.price}
                    </li>
                ))}
            </ul>
        </div>
        <div className="cart-total">
            <div className="cart-total-title">Total</div>
            <div className="cart-total-price"></div>
        </div>
    </div>
  )
}

// const mapStateToProps = state => (console.log(state),{
//     products: state.cart.products,
//   }
//  );

// export default connect(mapStateToProps)(Cart);

export default connect(props => ({ ...props }))(Cart);