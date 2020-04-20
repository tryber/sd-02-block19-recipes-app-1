import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { simpleGetAnything } from '../services/MealsAPI';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Comidas');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState();
  const [searchRadio, setSearchRadio] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [fetchResult, setFetchResult] = useState();
  const [isError, setIsError] = useState(null);

  // context 1 - funções
  const requestOk = (dataJson) => {
    setFetchResult(dataJson.meals);
    setIsFetching(false);
    setIsError(null);
  };

  const requestFail = (errorMsg) => {
    setIsError(errorMsg);
    setIsFetching(false);
  };

  useEffect(() => {
    setSearch('');
    setSearchRadio('');
  }, [isSearchOpen]);

  // Random 12 fetch
  useEffect(() => {
    const API = 'themealdb';
    const stringAPI = `https://www.${API}.com/api/json/v1/1/search.php?s=`;
    setIsFetching(true);
    simpleGetAnything(stringAPI)
      .then(
        (dataJson) => requestOk(dataJson),
        (error) => requestFail(error.message),
      );
  }, []);

  // SearchBar fetch
  useEffect(() => {
    const API = 'themealdb';
    const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
    setFetchResult(null);
    if (searchRadio && search) {
      setIsFetching(true);
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
    setHeaderTitle,
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
    isError,
    setIsError,
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
