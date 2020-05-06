import React, { useContext, useState } from 'react';

const Product = ({product}) => {

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{product.DESCRIPTION}</h2>

        <img className="card-img-top" src={product.IMAGE} alt={`Imagen de ${product.NAME}`} />

        <div className="card-body">

        </div>
      </div>
    </div>
  )
};

export default Product;
