import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Hago uso de algo intermedio entre Redux y el simple uso de Props
// Redux es muy potente para una aplicación pequeña y la creación
// del Action, Reducer y type sobran aquí. Props es basica, pero
// Context permite hacer una comunicación padre e hijo de manera manera
// eficas y sin agregar muchos archivos
export const CandidatoContext = createContext();

const CandidatoProvider = ( props ) => {

  const [ visitor, saveVisitor ] = useState([]);

  useEffect( () => {
    const getVisitor = async () => {
      const apiUrl = 'https://node-red-nxdup.mybluemix.net/visitor';

      const visitor = await axios.post( apiUrl );
      saveVisitor(visitor.data.data);
    }
    getVisitor();
  }, []);

  return (
    <CandidatoContext.Provider
      value={{
        visitor
      }}
    >
      {props.children}
    </CandidatoContext.Provider>
  );
}

export default CandidatoProvider;
