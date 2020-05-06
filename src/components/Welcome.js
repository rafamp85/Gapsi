import React, { Fragment, useContext } from 'react';
import { CandidatoContext } from '../context/CandidatoContext';
import Form from './Form';
import ListProducts from './ListProducts';

const Welcome = () => {

  const { visitor } = useContext( CandidatoContext );

  return (
    <Fragment>
      <h2 className="text-center my-5">{visitor.welcome}</h2>

      <Form />

      <ListProducts />

      <span className="d-flex justify-content-center row mt-4">{visitor.version}</span>
    </Fragment>
  );

};

export default Welcome;
