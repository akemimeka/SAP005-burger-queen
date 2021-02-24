/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import styled from 'styled-components';
import Modal from '../../components/Modal';
import { GoToPage } from '../../services';
import logo from '../../images/logo-horizontal-brown.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import InputRadio from '../../components/InputRadio';
import Header from '../../components/Header';

export default function Signup() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiUsers = `${apiURL}/users`;
  const history = useHistory();
  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const [workerRole, setWorkerRole] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  const [workerConfirmPassword, setWorkerConfirmPassword] = useState('');
  const [equalPasswords, setEqualPasswords] = useState(true);

  // const Container = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  // `;

  // const modalBtn = styled.button`
  // min-width: 100px;
  // padding: 16px 32px;
  // border-radius: 4px;
  // border: none;
  // background: #141414;
  // color: #fff;
  // font-size: 24px;
  // cursor: pointer;
  // `;

  const registerUser = (event) => {
    event.preventDefault();

    if (workerPassword !== workerConfirmPassword) {
      setEqualPasswords(false);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: workerName,
        email: workerEmail,
        role: workerRole,
        restaurant: 'hamburgueria-ipe',
        password: workerPassword,
      }),
    };

    fetch(apiUsers, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => GoToPage(history, '/'))
      .catch((error) => console.log(error));
  };

  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  const [isModalVisibile, setIsModalVisible] = useState(false);

  return (
    <Fragment>
      {/* <Container>
        <modalBtn onClick={openModal}>Im a Modal</modalBtn>
        <Modal showModal={showModal} setShowModal={setShowModal}
        />
      </Container> */}
      <Header
        headerClass='header-base bg-color-green'
        headerLogoLink='/'
        logoClass='logo-signup'
        logoSrc={logo}
        workAreaClass='header-title-base color-lightest'
        workAreaText='Cadastro'
        divLogoutClass='hidden'
      />
      <main className='main-container-base main-container-signup'>
        <div className='form-container-base form-container-signup-login' >
          <form onSubmit={registerUser}>
            <InputText
              divWrapClass='label-input-wrap'
              labelClass='label-for-input'
              labelText='Nome'
              inputRequired
              inputType='text'
              inputValue={workerName}
              inputMinLength='6'
              inputPlaceholder='Digite seu nome e sobrenome'
              inputClass='input-text'
              inputOnChange={(event) => setWorkerName(event.target.value)}
            />

            <InputText
              divWrapClass='label-input-wrap'
              labelClass='label-for-input'
              labelText='E-mail'
              inputRequired
              inputType='email'
              inputValue={workerEmail}
              inputMinLength='6'
              inputPlaceholder='Digite seu email'
              inputClass='input-text'
              inputOnChange={(event) => setWorkerEmail(event.target.value)}
            />

            <div className='label-input-wrap'>
              <p className='label-for-input'>Função</p>
              <div className='radio-buttons-wrap'>
                <InputRadio
                  inputClass='input-radio input-role'
                  inputId='role-hall'
                  inputName='role'
                  inputRequired
                  inputValue='hall'
                  inputChecked={workerRole === 'hall'}
                  inputOnChange={(event) => setWorkerRole(event.target.value)}
                  labelHtmlFor='role-hall'
                  labelClass='label-role button-base bg-color-green color-lightest'
                  labelText='Salão'
                />

                <InputRadio
                  inputClass='input-radio input-role'
                  inputId='role-kitchen'
                  inputName='role'
                  inputRequired
                  inputValue='kitchen'
                  inputChecked={workerRole === 'kitchen'}
                  inputOnChange={(event) => setWorkerRole(event.target.value)}
                  labelHtmlFor='role-kitchen'
                  labelClass='label-role button-base bg-color-green color-lightest'
                  labelText='Cozinha'
                />
              </div>
            </div>

            <InputText
              divWrapClass='label-input-wrap'
              labelClass='label-for-input'
              labelText='Senha'
              inputRequired
              inputType='password'
              inputMinLength='6'
              inputPlaceholder='Digite a senha'
              inputClass='input-text'
              inputOnChange={(event) => setWorkerPassword(event.target.value)}
            />

            <InputText
              labelClass='label-for-input'
              labelText='Confirmar Senha'
              inputRequired
              inputType='password'
              inputPlaceholder='Confirmar senha'
              inputClass='input-text'
              inputOnChange={(event) => setWorkerConfirmPassword(event.target.value)}
            />

            {!equalPasswords && <p className='msg-different-passwords'>As senhas são diferentes. Tente novamente.</p>}

            <Button
              buttonType='submit'
              buttonClass='button-base button-centered mg-top-2 bg-color-light-brown color-yellow'
              OnClick={() => setIsModalVisible(true)} buttonText='Cadastrar'
            />
            {isModalVisibile ? (
              <Modal onClose={() => setIsModalVisible(false)}>
                <h2>Teste de Modal</h2>
              </Modal>
            ) : null}
          </form>
        </div>

        <Link to="/">
          <Button
            buttonType='button'
            buttonClass='button-base bg-color-yellow color-brown'
            buttonText='Voltar'
          />
        </Link>
      </main>

      <Footer />
    </Fragment >
  );
}
