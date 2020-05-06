import React, { useContext, useState } from 'react';

const Product = ({product}) => {

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{product.DESCRIPTION}</h2>

        <img className="card-img-top" src={product.IMAGE} alt={`Imagen de ${product.NAME}`} />

        <div className="card-body">
          <h2>Precio: $ {product.PRICE}</h2>
        </div>
      </div>
    </div>
  )
};

export default Product;
