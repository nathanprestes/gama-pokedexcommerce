import React, { useState, useEffect } from 'react';
import API from "../../service/api";
import ProductCard from "../ProductCard/ProductCard";

import './ProductList.css';

const ProductList = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.get(
        '/pokedex/1/',
      );
      setPokemon(result.data.pokemon_entries);
    };
    fetchData();

  }, []);

  return (
    <div className="poke-list">
        <ul>
            {pokemon.map(item => (
                <ProductCard 
                key={item.entry_number}
                item={item}
                price={Math.floor(Math.random() * 6) + 1}
                quantity={1}
                />
            ))}
      </ul>
    </div>
  )
}

export default ProductList;
