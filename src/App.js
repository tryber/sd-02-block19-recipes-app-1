import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Perfil from './pages/Perfil';
import Comidas from './pages/Comidas';
import Detalhes from './pages/Detalhes';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import EmProcesso from './pages/EmProcesso';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/perfil" component={Perfil} />
          <Route exact path="/receitas/comidas" component={Comidas} />
          <Route exact path="/receitas/bebidas" component={Bebidas} />
          <Route exact path="/receitas/explorar" component={Explorar} />
          <Route exact path="/receitas/:type/:id" component={Detalhes} />
          <Route exact path="/receitas-feitas" component={ReceitasFeitas} />
          <Route exact path="/receitas/emprocesso/:type/:id" component={EmProcesso} />
          <Route exact path="/receitas-favoritas" component={ReceitasFavoritas} />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
