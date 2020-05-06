import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Product from './Product';

const ListProducts = () => {

  const { products } = useContext( ProductsContext );

  return (
    <div className="row mt-5">
      {products.map( product => (
          <Product
            key={ product.ID }
            product={product}
          />
      ))}
    </div>
  )

};

export default ListProducts;
