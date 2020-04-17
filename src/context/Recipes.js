import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import simpleGetAnything from '../services/MealsAPI';
import useDebounce from '../hooks/useDebounce';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle] = useState('Receitas');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState();
  const [searchRadio, setSearchRadio] = useState();
  const [API] = useState('themealdb');
  const [isFetching, setIsFetching] = useState(false);
  const [fetchResult, setFetchResult] = useState([]);
  const [isError, setIsError] = useState(null);

  // context 1 - funções
  const debouncedSearchTerm = useDebounce(search, 600);

  const requestOk = (dataJson) => {
    console.log(dataJson.meals);
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

  useEffect(() => {
    const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
    if (searchRadio && search && debouncedSearchTerm) {
      setIsFetching(true);
      console.log(stringAPI);
      simpleGetAnything(stringAPI)
        .then(
          (dataJson) => requestOk(dataJson),
          (error) => requestFail(error.message),
        );
    }
  }, [debouncedSearchTerm]);


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
    API,
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
