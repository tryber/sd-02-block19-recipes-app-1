import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Receitas');

  // context 1 - funções

  // context 2 - export.context
  const contextValues = {
    email,
    password,
    setEmail,
    setPassword,
    headerTitle,
  };

  // render
  return (
    <RecipesContext.Provider value={contextValues}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };

RecipesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
