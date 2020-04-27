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
  const [recipeId, setRecipeId] = useState();
  const [buttonText] = useState('comidas');

  // context 1 - funções
  const debouncedSearchTerm = useDebounce(search, 600);

  const requestOk = (dataJson) => {
    setFetchResult(dataJson);
    setIsFetching(false);
    setIsError(null);
  };

  const requestFail = (errorMsg) => {
    setFetchResult(null);
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
  }, [isSearchOpen]);

  // useEffect(({ match }) => {
  //   const title = match.path.split('/')[match.path.split('/').length - 1];
  //   setHeaderTitle(title);
  // }, []);

  // SearchBar fetch
  useEffect(() => {
    if (searchRadio && search && debouncedSearchTerm) {
      const stringAPI = `https://www.${API}.com/api/json/v1/1/${searchRadio}=${search}`;
      setIsFetching(true);
      callTemplateFetch(stringAPI);
    }
  }, [debouncedSearchTerm, searchRadio]);

  useEffect(() => {
    if (recipeId) {
      const detailsAPI = `https://www.${API}.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      setIsFetching(true);
      simpleGetAnything(detailsAPI)
        .then(
          ({ meals, drinks }) => requestOk(meals || drinks),
          (error) => requestFail(error.message),
        );
    }
  }, [recipeId]);

  // context 2 - export.context
  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    headerTitle,
    setHeaderTitle,
    buttonText,
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
    recipeId,
    setRecipeId,
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
