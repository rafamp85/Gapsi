import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CandidatoProvider from './context/CandidatoContext';
import ProductsProvider from './context/ProductsContext';

function App() {
  return (
    <CandidatoProvider>
      <ProductsProvider>
        <Header />

        <Welcome />
      </ProductsProvider>
    </CandidatoProvider>
  );
}

export default App;
