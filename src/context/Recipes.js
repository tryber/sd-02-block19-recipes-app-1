import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import simpleGetAnything from '../services/MealsAPI';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle] = useState('Receitas');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState();
  const [searchRadio, setSearchRadio] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [fetchResult, setFetchResult] = useState([]);

  // context 1 - funções
  const requestOk = (dataJson) => {
    console.log(dataJson.meals);
    setFetchResult(dataJson.meals);
    setIsFetching(false);
  };

  const requestFail = (errorMsg) => {
    setFetchResult(errorMsg);
    setIsFetching(false);
  };

  useEffect(() => {
    setSearch('');
    setSearchRadio('');
  }, [isSearchOpen]);

  useEffect(() => {
    const API = 'themealdb';
    const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
    if (searchRadio && search) {
      setIsFetching(true);
      console.log(stringAPI);
      simpleGetAnything(stringAPI)
        .then(
          (dataJson) => requestOk(dataJson),
          (error) => requestFail(error.message),
        );
    }
  }, [search]);

  // context 2 - export.context
  const contextValues = {
    email,
    password,
    setEmail,
    setPassword,
    headerTitle,
    isSearchOpen,
    setIsSearchOpen,
    search,
    setSearch,
    searchRadio,
    setSearchRadio,
    isFetching,
    setIsFetching,
    fetchResult,
    setFetchResult,
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
