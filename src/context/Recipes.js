import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { simpleGetAnything } from '../services/MealsAPI';
import useDebounce from '../hooks/useDebounce';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Comidas');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState();
  const [searchRadio, setSearchRadio] = useState();
  const [API, setAPI] = useState('themealdb');
  const [isFetching, setIsFetching] = useState(true);
  const [fetchResult, setFetchResult] = useState(null);
  const [isError, setIsError] = useState(null);

  // context 1 - funções
  const debouncedSearchTerm = useDebounce(search, 600);

  const requestOk = (dataJson) => {
    setFetchResult(dataJson.meals);
    setIsFetching(false);
    setIsError(null);
  };

  const requestFail = (errorMsg) => {
    setIsError(errorMsg);
    setIsFetching(false);
  };

  // set headerTitle
  const titleHeader = ({ path }) => {
    console.log(path);
    const title = path.split('/')[path.split('/').length - 1];
    setHeaderTitle(title);
  };

  useEffect(() => {
    setSearch('');
    setSearchRadio('');
  }, [isSearchOpen]);

  // Random 12 fetch
  useEffect(() => {
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
    const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
    if (searchRadio && search && debouncedSearchTerm) {
      setIsFetching(true);
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
    setEmail,
    password,
    setPassword,
    headerTitle,
    setHeaderTitle,
    isSearchOpen,
    setIsSearchOpen,
    search,
    setSearch,
    searchRadio,
    setSearchRadio,
    API,
    setAPI,
    isFetching,
    setIsFetching,
    fetchResult,
    setFetchResult,
    isError,
    setIsError,
    titleHeader,
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
