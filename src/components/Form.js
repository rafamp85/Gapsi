import React, { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Form = () => {

  const { findProduct } = useContext( ProductsContext );

  const [ currentpage, saveCurrentPage ] = useState(1);
  const [ search, saveSearch ] = useState({
    name: '',
    page: currentpage
  });

  const { name, page } = search;

  const getProduct = e => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const backPage = () => {
    const newCurrentPage = currentpage - 1;

    if (currentpage === 0) return;

    findProduct({
      name,
      page: newCurrentPage
    });
  };

  const nextPage = () => {
    const newCurrentPage = currentpage + 1;

    console.log(newCurrentPage);

    saveCurrentPage(currentpage + 1);

    findProduct({
      name,
      page: newCurrentPage
    });
  };

  return (
    <form
        className="col-12"
        onSubmit={e => {
          e.preventDefault();
          findProduct(search);
        }}
    >
          <fieldset className="text-center">
              <legend>Busca productos categoria</legend>
          </fieldset>

          <div className="d-flex justify-content-center row mt-4">
            <div className="col-md-4">
              <input
                name="name"
                className="form-control"
                type="text"
                placeholder="Producto"
                onChange={getProduct}
              />
            </div>

            <div className="col-md-4">
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Buscar Productos"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center row mt-4">
            {(currentpage === 1) ? null : (
              <button
                type="button"
                className="btn btn-info mr-1"
                onClick={backPage}
              >&laquo; Anterior</button>
            )}

            {(name === '') ? null : (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={nextPage}
                >Siguiente &raquo;</button>
            )}
          </div>
      </form>
  );

}

export default Form;
