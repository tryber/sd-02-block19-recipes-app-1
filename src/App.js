import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import { RecipesProvider } from './context/Recipes';

function App() {
  return (
    <RecipesProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecipesProvider>
  );
}

export default App;
