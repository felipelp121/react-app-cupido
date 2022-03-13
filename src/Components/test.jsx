{
  /* <div className="bg-red-200 h-screen">
  <HeaderComponent2 />
  <div className="flex flex-col justify-center px-10">
    <div className="h-8"></div>
    <h1 className="text-2xl text-center">Cadastre-se agora mesmo</h1>
    <div className="h-6"></div>
    <div className="bg-white p-8 rounded-xl">
      <form onSubmit={this.handleSubmitSignUp}>
        <label htmlFor="">Nome de Usuário</label>
        <input
          type="text"
          className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          onChange={this.handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          onChange={this.handleChange}
        />
        <label htmlFor="">Senha</label>
        <input
          type="text"
          className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          onChange={this.handleChange}
        />
        <div className="h-6"></div>
        <div className="flex justify-center">
          <button
            className="bg-[#DE310B] py-1 px-6 rounded-lg text-white"
            disabled={this.state.submittingSignUp}
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
    <div className="h-4"></div>
    <p className="text-center text-base">
      Já possue cadastro? <a href="/src/login.html"> Faça Login</a>
    </p>
  </div>
  <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
</div>;






------------------------------------------------------------------- */
}

{
  /* <div className="bg-red-200 h-screen">
  <HeaderComponent2 />
  <div className="flex flex-col justify-center px-10">
    <div className="h-8"></div>
    <h1 className="text-2xl text-center">Cadastre-se agora mesmo</h1>
    <div className="h-6"></div>
    <div className="bg-white p-8 rounded-xl">
      <form onSubmit={this.handleSubmitSignUp}>
        <label htmlFor="">Nome de Usuário</label>
        <input
          type="text"
          className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          onChange={this.handleChange}
        />
        <label htmlFor="">Código de confirmação</label>
        <input
          type="text"
          className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          onChange={this.handleChange}
        />
        <div className="h-6"></div>
        <div className="flex justify-center">
          <button
            className="bg-[#DE310B] py-1 px-6 rounded-lg text-white"
            disabled={this.state.submittingConfirmation}
            type="submit"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
    <div className="h-4"></div>
  </div>
  <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
</div>; */
}

import React, { Component } from "react";
import { Auth, Cache } from "aws-amplify";

class CognitoReactSignInForm extends Component {
  state = {
    username: "",
    password: "",
    signedIn: false,
    isSigningIn: false,
    isSigningOut: false,
    tokenId: "",
    refreshToken: "",
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signedIn, username, password } = this.state;

    if (!signedIn) {
      this.setState({ isSigningIn: true });
      Auth.signIn({
        username,
        password,
      })
        .then((cognitoUser) => {
          console.log("Signed In!");
          console.log("CognitoUser:");
          console.log(cognitoUser);

          Auth.currentSession()
            .then((userSession) => {
              console.log("Got user currentSession:");
              console.log(userSession);
              this.setState({
                signedIn: true,
                isSigningIn: false,
                tokenId: userSession.idToken.jwtToken,
                refreshToken: userSession.refreshToken.token,
              });
            })
            .catch((err) => {
              this.setState({ isSigningIn: false });
              console.log(err);
            });
        })
        .catch((err) => {
          this.setState({ isSigningIn: false });
          console.log(err);
        });
    }
  }

  changeAuthStorageConfiguration(e) {
    const shouldRememberUser = e.target.checked;
    if (shouldRememberUser) {
      const localStorageCache = Cache.createInstance({
        keyPrefix: "localStorageAuthCache",
        storage: window.localStorage,
      });

      Auth.configure({
        storage: localStorageCache,
      });
    } else {
      const sessionStorageCache = Cache.createInstance({
        keyPrefix: "sessionAuthCache",
        storage: window.sessionStorage,
      });

      Auth.configure({
        storage: sessionStorageCache,
      });
    }
  }

  handleLogout() {
    if (this.state.signedIn) {
      this.setState({ isSigningOut: true });
      Auth.signOut()
        .then((data) => {
          this.setState({
            signedIn: false,
            isSigningOut: false,
            tokenId: "",
            refreshToken: "",
          });
          console.log(data);
        })
        .catch((err) => {
          this.setState({ isSigningOut: false });
          console.log(err);
        });
    }
  }

  componentDidMount() {
    this.setState({ isSigningIn: true });
    Auth.currentSession()
      .then((userSession) => {
        console.log("Got user currentSession!");
        console.log(userSession);
        this.setState({
          signedIn: true,
          isSigningIn: false,
          tokenId: userSession.idToken.jwtToken,
          refreshToken: userSession.refreshToken.token,
        });
      })
      .catch((err) => {
        this.setState({ isSigningIn: false });
        console.log(err);
      });
  }

  render() {
    if (this.state.signedIn) {
      return (
        <div>
          <div>
            <b>Your tokenId:</b>
          </div>
          <div>{this.state.tokenId}</div>
          <div>
            <b>Your refreshToken:</b>
          </div>
          <div>{this.state.refreshToken}</div>
          <button
            className="btn-toggle"
            onClick={this.handleLogout}
            className="btn btn-danger"
          >
            Sair
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameSignInInput">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="usernameSignInInput"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordSignInInput">Senha</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="passwordSignInInput"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            defaultChecked
            type="checkbox"
            className="form-check-input"
            id="rememberMeSignInInput"
            onChange={this.changeAuthStorageConfiguration}
          />
          <label className="form-check-label" htmlFor="rememberMeSignInInput">
            Lembrar-se de mim
          </label>
        </div>
        <button
          disabled={this.state.isSigningIn}
          type="submit"
          className="btn btn-primary"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default CognitoReactSignInForm;
