/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/InputText';
import Footer from '../../components/Footer';
import logo from '../../images/logo-circular.png';

export default function Login() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiAuth = `${apiURL}/auth`;
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const authUser = (event) => {
    event.preventDefault();

    const authOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin,
      }),
    };

    fetch(apiAuth, authOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <main className='main-container'>
        <h1>
          <img className='logo-login' src={logo} alt='Logo Hamburgueria Ipê' />
        </h1>

        <form className='form-container' onSubmit={authUser}>
          <Input
            divWrapClassName='label-input-wrap'
            labelClassName='label-for-input'
            labelText='E-mail'
            inputRequired
            inputType='email'
            inputValue={emailLogin}
            inputPlaceholder='Insira aqui seu e-mail'
            inputClassName='input-text'
            inputOnChange={(event) => setEmailLogin(event.target.value)}
          />

          <Input
            divWrapClassName='label-input-wrap'
            labelClassName='label-for-input'
            labelText='Senha'
            inputRequired
            inputType='password'
            inputValue={passwordLogin}
            inputPlaceholder='Insira aqui sua senha'
            inputClassName='input-text'
            inputOnChange={(event) => setPasswordLogin(event.target.value)}
          />

          <Button
            type='submit'
            className='button-base button-primary'
            buttonText='Entrar'
          />
        </form>

        <Link to="/cadastro">
          <Button
            type='button'
            className='button-base button-secondary'
            buttonText='Cadastre-se'
          />
        </Link>
      </main>

      <Footer />
    </Fragment>
  );
}
