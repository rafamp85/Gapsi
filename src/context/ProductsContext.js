import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsProvider = ( props ) => {

  const [ products, saveProducts ] = useState([]);
  const [ next, isNext ] = useState(false);
  const [ message, saveMessage ] = useState('');
  const [ search, findProduct ] = useState({
    name: '',
    page: '1'
  });

  const { name, page } = search;

  useEffect( () => {
    const getProducts = async () => {

      if ( !name ) {
        return;
      }
      const urlProducts = `https://node-red-nxdup.mybluemix.net/productos/${name}/${page}`;
      const products = await axios.get(urlProducts);

      if ( products.data.message ) {
        isNext(false);
        saveMessage( products.data.message );
        saveProducts([]);
        return;
      }

      isNext(true);
      saveMessage('');
      saveProducts(products.data.data.products);
    };

    getProducts();

  }, [search]);

  return (
    <ProductsContext.Provider
        value={{
          products,
          next,
          message,
          saveMessage,
          findProduct
        }}
    >
      {props.children}
    </ProductsContext.Provider>

  );

}

export default ProductsProvider;
