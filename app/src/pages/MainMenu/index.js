import React, { Fragment, useState } from 'react';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import logo from '../../images/logo-horizontal-brown.png';
import meatBurger from '../../images/menu-photos/burger-meat.png';
import chickenBurger from '../../images/menu-photos/burger-chicken.png';
import veggieBurger from '../../images/menu-photos/burger-veggie.png';
import frenchFries from '../../images/menu-photos/fries.png';
import onionRings from '../../images/menu-photos/onion-rings.png';
import water from '../../images/menu-photos/water.png';
import soda from '../../images/menu-photos/soda.png';
import InputRadio from '../../components/InputRadio';
import TotalAndSend from '../../components/TotalAndSend';
import OrderedItem from '../../components/OrderedItem';
import ItemQuantity from '../../components/ItemQuantity';

export default function MainMenu() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiProducts = `${apiURL}/products`;
  const currentUserToken = localStorage.getItem('currentUserToken');
  const getTableNumber = localStorage.getItem('currentTable');
  const getClientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${getTableNumber} · ${getClientName}`;
  const [products, setProducts] = useState([]);
  const [filteredBurgersByFlavor, setFilteredBurgersByFlavor] = useState([]);
  const [filteredBurgersByType, setFilteredBurgersByType] = useState([]);
  const [selectedBurger, setFilteredBurgerByExtra] = useState([]);
  const [disableBurgerType, setDisableBurgerType] = useState(true);
  const [disableBurgerExtra, setDisableBurgerExtra] = useState(true);

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: currentUserToken,
    },
  };

  fetch(apiProducts, requestOptions)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  const filterByFlavor = (list, flavor) => {
    const filteredList = list.filter((item) => item.flavor === flavor);
    return setFilteredBurgersByFlavor(filteredList);
  };

  const filterByType = (list, word) => {
    const filteredList = list.filter((item) => item.name.includes(word));
    return setFilteredBurgersByType(filteredList);
  };

  const onClickFlavor = (id) => {
    filterByFlavor(products, id);
    setDisableBurgerType(false);
  };

  const onClickType = (id) => {
    filterByType(filteredBurgersByFlavor, id);
    setDisableBurgerExtra(false);
  };

  const onClickExtra = (id) => {
    const word = (id !== 'none' ? id : null);
    const filteredList = filteredBurgersByType.filter((item) => item.complement === word);
    console.log('selected burger', filteredList[0]);
    return setFilteredBurgerByExtra(filteredList[0]);
  };

  return (
    <Fragment>
      <div className='menu-grid-container'>
        <Header
          headerClass='header-base header-main-menu bg-color-yellow'
          headerLogoLink='/salao'
          logoSrc={logo}
          workAreaClass='header-title-base color-brown'
          workAreaText={menuHeaderSubtitle}
          divLogoutClass='align-right weight-500'
          workerRoleClass='header-role-base color-brown'
          workerRoleText='Atendente'
          workerNameClass='header-name-base color-brown'
          buttonLogoutClass='button-logout-base bg-color-light color-brown'
        />

        <section className='menu-grid-child menu-section-container main-menu-burgers bg-color-yellow-20'>
          <h3 className='menu-section-title'>Hambúrgueres</h3>
          <div className='burger-meat-options'>
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='carne'
              inputName='meat-options'
              inputValue='Hambúrg. de Carne'
              inputOnChange={onClickFlavor}
              labelHtmlFor='carne'
              labelClass='label-item-box'
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemText='Carne'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='frango'
              inputName='meat-options'
              inputValue='Hambúrg. de Frango'
              inputOnChange={onClickFlavor}
              labelHtmlFor='frango'
              labelClass='label-item-box'
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemText='Frango'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='vegetariano'
              inputName='meat-options'
              inputValue='Hambúrg. Vegetariano'
              inputOnChange={onClickFlavor}
              labelHtmlFor='vegetariano'
              labelClass='label-item-box'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='burger-type-wrap'>
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='simples'
              inputDisabled={disableBurgerType}
              inputName='burger-type'
              inputValue='simple-burger'
              inputOnChange={onClickType}
              labelHtmlFor='simples'
              labelClass='label-item-options'
              labelText='Simples'
            />

            <InputRadio
              inputClass='hidden input-item-options'
              inputId='duplo'
              inputDisabled={disableBurgerType}
              inputName='burger-type'
              inputValue='double-burger'
              inputOnChange={onClickType}
              labelHtmlFor='duplo'
              labelClass='label-item-options'
              labelText='Duplo'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='queijo'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='cheese'
              inputOnChange={onClickExtra}
              labelHtmlFor='queijo'
              labelClass='label-item-options'
              labelText='+ Queijo'
            />

            <InputRadio
              inputClass='hidden input-item-options'
              inputId='ovo'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='egg'
              inputOnChange={onClickExtra}
              labelHtmlFor='ovo'
              labelClass='label-item-options'
              labelText='+ Ovo'
            />

            <InputRadio
              inputClass='hidden input-item-options'
              inputId='none'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='Sem extra'
              inputOnChange={onClickExtra}
              labelHtmlFor='none'
              labelClass='label-item-options'
              labelText='Nenhum'
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-sides bg-color-yellow-20'>
          <h3 className='menu-section-title'>Acompanhamentos</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='Batata frita'
              inputName='extra-sides'
              inputValue='Fritas'
              labelHtmlFor='Batata frita'
              labelClass='label-item-box'
              menuItemSrc={frenchFries}
              menuItemDescription='Fritas'
              menuItemText='Fritas'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='Anéis de cebola'
              inputName='extra-sides'
              inputValue='onion-rings'
              labelHtmlFor='Anéis de cebola'
              labelClass='label-item-box'
              menuItemSrc={onionRings}
              menuItemDescription='Anéis de cebola'
              menuItemText='Anéis de cebola'
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-drinks bg-color-yellow-20'>
          <h3 className='menu-section-title'>Bebidas</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='drink-water'
              inputName='drinks-options'
              inputValue='water'
              labelHtmlFor='drink-water'
              labelClass='label-item-box'
              menuItemSrc={water}
              menuItemDescription='Água'
              menuItemText='Água'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='drink-soda'
              inputName='drinks-options'
              inputValue='soda'
              labelHtmlFor='drink-soda'
              labelClass='label-item-box'
              menuItemSrc={soda}
              menuItemDescription='Refrigerante'
              menuItemText='Refrigerante'
            />
          </div>

          <div className='drink-size-wrap'>
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='drink-size-500'
              inputName='drink-size'
              inputValue='500ml'
              labelHtmlFor='drink-size-500'
              labelClass='label-item-options'
              labelText='500ML'
            />
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='drink-size-750'
              inputName='drink-size'
              inputValue='750ml'
              labelHtmlFor='drink-size-750'
              labelClass='label-item-options'
              labelText='750ML'
            />
          </div>
        </section>

        <aside className='menu-grid-child main-menu-orders bg-color-yellow-20'>
          <div className='order-title-wrap'>
            <h3 className='menu-section-title'>Pedido</h3>
            <hr className='dividing-line bg-color-dark-brown'></hr>
          </div>

          <div className='order-list-items'>
            {/* AQUI IRÃO APARECER OS ITENS PEDIDOS */}
            {/* {burgerFlavor ? (
              <Fragment>
                <OrderedItem
                  itemNameText={burgerFlavor}
                  itemPriceText='10,00'
                />
                <ItemQuantity
                  itemQuantityText='01'
                  itemTotalValue='20,00'
                />
              </Fragment>
            ) : <p className='empty-order-msg color-brown weight-500'>
            Os itens lançados irão aparecer aqui
            </p>} */}
          </div>

          <TotalAndSend
            totalPriceValue
            sendOrderButton
            cancelOrderButton
          />
        </aside>
      </div>
    </Fragment>
  );
}
