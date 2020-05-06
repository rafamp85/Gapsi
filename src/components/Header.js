import React from 'react';
import logo from '../logo.png';


// Dividir en pequeños componentes una aplicación es parte de los
// patrones SOLID y a la vez hacemos uso de las ventajas de PWA al
// solo usar direccionamiento 
const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
            e-Commerce - Gapsi
        </h1>
      </div>

      <div>
        <img
          src={logo}
          alt="imagen logo"
        />
      </div>
    </nav>
  );

}

export default Header;
