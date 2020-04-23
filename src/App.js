import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { RecipesProvider } from './context/Recipes';
import LoginPage from './pages/LoginPage';
import Comidas from './pages/Comidas';
// import Bebidas from './pages/Bebidas';

function App() {
  return (
    <RecipesProvider>
      <div className="App" data-testid="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/receitas/comidas" component={Comidas} />
            <Route exact path="/receitas/bebidas" component={Comidas} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
