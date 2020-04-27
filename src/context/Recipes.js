import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { simpleGetAnything } from '../services/MealsAPI';
import useDebounce from '../hooks/useDebounce';

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [headerTitle, setHeaderTitle] = useState('comidas');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState();
  const [searchRadio, setSearchRadio] = useState();
  const [category, setCategory] = useState([]);
  const [API, setAPI] = useState('themealdb');
  const [isFetching, setIsFetching] = useState(true);
  const [fetchResult, setFetchResult] = useState(null);
  const [isError, setIsError] = useState(null);

  // context 1 - funções
  const debouncedSearchTerm = useDebounce(search, 600);

  const requestOk = (dataJson) => {
    setFetchResult(dataJson);
    setIsFetching(false);
    setIsError(null);
  };

  const requestFail = (errorMsg) => {
    setIsError(errorMsg);
    setIsFetching(false);
  };

  const callTemplateFetch = (stringAPI) => {
    simpleGetAnything(stringAPI)
      .then(
        (dataJson) => requestOk(dataJson.meals || dataJson.drinks),
        (error) => requestFail(error.message),
      );
  };

  const btnCategory = (param, random) => {
    if (param === category) {
      setFetchResult(null);
      setCategory(null);
    } else if (param === 'All') {
      setCategory(param);
      setIsFetching(true);
      setFetchResult(random);
      setIsFetching(false);
    } else {
      const stringAPI = `https://www.${API}.com/api/json/v1/1/filter.php?c=${param}`;
      setCategory(param);
      setIsFetching(true);
      callTemplateFetch(stringAPI);
    }
  };

  useEffect(() => {
    setSearch('');
    setSearchRadio('');
    setFetchResult(null);
  }, [isSearchOpen]);

  // SearchBar fetch
  useEffect(() => {
    const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
    if (searchRadio && search && debouncedSearchTerm) {
      setIsFetching(true);
      callTemplateFetch(stringAPI);
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
    category,
    setCategory,
    API,
    setAPI,
    isFetching,
    setIsFetching,
    fetchResult,
    setFetchResult,
    isError,
    setIsError,
    btnCategory,
    requestOk,
    requestFail,
    debouncedSearchTerm,
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
