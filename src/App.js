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
import ExplorarTipos from './pages/ExplorarTipos';
import ExplorarIngredientes from './pages/ExplorarIngredientes';


function App() {
  return (
    <div data-testid="App">
      <RecipesProvider>
        <BrowserRouter>
          <Switch>
          <Route path="/perfil" component={Perfil} />
          <Route path="/explorar/comidas/ingredientes" component={ExplorarIngredientes} />
          <Route exact path="/explorar/comidas" component={ExplorarTipos} />
          <Route path="/explorar/bebidas/ingredientes" component={ExplorarIngredientes} />
          <Route exact path="/explorar/bebidas" component={ExplorarTipos} />
          <Route exact path="/explorar" component={Explorar} />
          <Route exact path="/receitas/comidas" component={Comidas} />
          <Route exact path="/receitas/bebidas" component={Bebidas} />
          <Route exact path="/receitas/:type/:id" component={Detalhes} />
          <Route exact path="/receitas-feitas" component={ReceitasFeitas} />
          <Route exact path="/receitas/emprocesso/:type/:id" component={EmProcesso} />
          <Route exact path="/receitas-favoritas" component={ReceitasFavoritas} />
          <Route path="/" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </RecipesProvider>
    </div>
  );
}

export default App;
