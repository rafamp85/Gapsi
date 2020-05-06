import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Product from './Product';

const ListProducts = () => {

  const { products, message } = useContext( ProductsContext );

  return (
    <div className="row mt-5">
      { message !== '' ? <h2 className="mx-auto p-2 bg-danger text-white">{message}</h2> : null }
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
