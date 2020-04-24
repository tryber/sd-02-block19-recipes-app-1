import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/receitas/comidas" component={Comidas} />
          <Route exact path="/receitas/bebidas" component={Bebidas} />
          <Route exact path="/receitas/explorar" component={Explorar} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
