import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import { RecipesProvider } from './context/Recipes';
import Receitas from './pages/Receitas';

function App() {
  return (
    <RecipesProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/receitas" component={Receitas} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
