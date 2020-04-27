import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import Detalhes from './pages/Detalhes';
import Perfil from './pages/Perfil';


function App() {
  return (
    <RecipesProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/receitas/comidas" component={Comidas} />
          <Route exact path="/receitas/bebidas" component={Bebidas} />
          <Route exact path="/receitas/explorar" component={Explorar} />
            <Route exact path="/receitas/:type/:id" component={Detalhes} />
            <Route exact path="/perfil" component={Perfil} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
