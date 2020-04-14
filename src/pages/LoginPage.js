import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderLoginSection() {
    return (
      <div className="login-campo">
        <h2>Login</h2>
        <input
          id="email"
          name="email"
          type="text"
          data-testid="email-input"
          placeholder=" E-mail"
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id="password"
          name="password"
          type="password"
          data-testid="password-input"
          placeholder=" Senha"
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }

  renderEntrarButton() {
    const { password, email } = this.state;
    let disabled = false;
    if (password.length < 6 || email === '') {
      disabled = true;
    }
    return (
      <div className="btn-div">
        <button
          type="button"
          className="btn-entrar"
          data-testid="login-submit-btn"
          disabled={disabled}
        >
          Entrar
          </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLoginSection()}
        {this.renderEntrarButton()}
      </div>
    );
  }
}

export default LoginPage;
