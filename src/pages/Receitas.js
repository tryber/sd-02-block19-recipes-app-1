import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RecipesContext } from '../context/Recipes';

const Receitas = () => {
  const { isFetching } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      {isFetching ? <h1>Tá buscando</h1> : <h1>Não busca nada</h1>}
      <Footer />
    </div>
  );
}

export default Receitas;
