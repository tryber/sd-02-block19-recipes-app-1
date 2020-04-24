import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Receitas from './pages/Receitas';
import Detalhes from './pages/Detalhes';
import Perfil from './pages/Perfil';


function App() {
  return (
    <RecipesProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/receitas" component={Receitas} />
            <Route exact path="/receitas/:type/:id" component={Detalhes} />
            <Route exact path="/perfil" component={Perfil} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
