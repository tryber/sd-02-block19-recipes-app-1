import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Perfil from './pages/Perfil';
import Comidas from './pages/Comidas';
import Detalhes from './pages/Detalhes';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import ExplorarTipos from './pages/ExplorarTipos';
import ExplorarIngredientes from './pages/ExplorarIngredientes';

function App() {
  return (
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
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
