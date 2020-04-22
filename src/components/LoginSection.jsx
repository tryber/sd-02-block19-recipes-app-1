import React, { useContext } from 'react';
import { RecipesContext } from '../context/Recipes';

const LoginSection = () => {
  const { email, password, setEmail, setPassword } = useContext(RecipesContext);
  return (
    <div className="login-campo">
      <h2>Login</h2>
      <input
        id="email"
        name="setEmail"
        type="email"
        data-testid="email-input"
        placeholder=" E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        id="password"
        name="setPassword"
        type="password"
        data-testid="password-input"
        placeholder=" Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </div>
  );
};

export default LoginSection;
