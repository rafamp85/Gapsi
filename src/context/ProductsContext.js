import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsProvider = ( props ) => {

  const [ products, saveProducts ] = useState([]);
  const [ search, findProduct ] = useState({
    name: '',
    page: '1'
  });

  const { name, page } = search;

  useEffect( () => {
    console.log(name);
    const getProducts = async () => {
      const urlProducts = `https://node-red-nxdup.mybluemix.net/productos/${name}/${page}`;
      const products = await axios.get(urlProducts);

      saveProducts(products.data.data.products);
    };

    getProducts();

  }, [search]);

  return (
    <ProductsContext.Provider
        value={{
          products,
          findProduct
        }}
    >
      {props.children}
    </ProductsContext.Provider>

  );

}

export default ProductsProvider;
