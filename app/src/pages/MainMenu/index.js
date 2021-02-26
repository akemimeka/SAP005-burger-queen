/* eslint-disable object-curly-newline */
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
import InputRadioMenu from '../../components/InputRadioMenu';
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
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [disableBurgerType, setDisableBurgerType] = useState(true);
  const [disableBurgerExtra, setDisableBurgerExtra] = useState(true);
  const [disableDrinkSize, setDisableDrinkSize] = useState(true);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: currentUserToken },
  };

  fetch(apiProducts, requestOptions)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  const filterByFlavor = (list, flavor) => {
    const filteredList = list.filter((item) => item.flavor === flavor);
    setFilteredBurgersByFlavor(filteredList);
  };

  const filterByType = (list, type) => {
    const filteredList = list.filter((item) => item.name.includes(type));
    setFilteredBurgersByType(filteredList);
  };

  const filterByName = (list, name) => {
    const filteredItem = list.filter((item) => item.name === name || item.name.includes(name));
    console.log('selected item', filteredItem[0]);
    setSelectedItem(filteredItem[0]);
  };

  const filterByDrink = (list, drink) => {
    const filteredList = list.filter((item) => item.name.includes(drink));
    console.log('selected drink', filteredList);
    setFilteredDrinks(filteredList);
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
    setFilteredBurgerByExtra(filteredList[0]);
  };

  const onClickDrinkType = (id) => {
    filterByDrink(products, id);
    setDisableDrinkSize(false);
  };

  const onClickDrinkSize = (id) => {
    filterByName(filteredDrinks, id);
  };

  const onClickItem = (id) => {
    filterByName(products, id);
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
              labelClass='label-item-box'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='burger-type-wrap'>
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='simples'
              inputDisabled={disableBurgerType}
              inputName='burger-type'
              inputValue='simple-burger'
              inputOnChange={onClickType}
              labelClass='label-item-options'
              labelText='Simples'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='duplo'
              inputDisabled={disableBurgerType}
              inputName='burger-type'
              inputValue='double-burger'
              inputOnChange={onClickType}
              labelClass='label-item-options'
              labelText='Duplo'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='queijo'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='cheese'
              inputOnChange={onClickExtra}
              labelClass='label-item-options'
              labelText='+ Queijo'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='ovo'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='egg'
              inputOnChange={onClickExtra}
              labelClass='label-item-options'
              labelText='+ Ovo'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='none'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='Sem extra'
              inputOnChange={onClickExtra}
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
              inputOnChange={onClickItem}
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
              inputOnChange={onClickItem}
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
              inputId='Água'
              inputName='drinks-options'
              inputValue='water'
              inputOnChange={onClickDrinkType}
              labelClass='label-item-box'
              menuItemSrc={water}
              menuItemDescription='Água'
              menuItemText='Água'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='Refrigerante'
              inputName='drinks-options'
              inputValue='soda'
              inputOnChange={onClickDrinkType}
              labelClass='label-item-box'
              menuItemSrc={soda}
              menuItemDescription='Refrigerante'
              menuItemText='Refrigerante'
            />
          </div>

          <div className='drink-size-wrap'>
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='500'
              inputName='drink-size'
              inputValue='500ml'
              inputOnChange={onClickDrinkSize}
              inputDisabled={disableDrinkSize}
              labelClass='label-item-options'
              labelText='500ML'
            />
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='750'
              inputName='drink-size'
              inputValue='750ml'
              inputOnChange={onClickDrinkSize}
              inputDisabled={disableDrinkSize}
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

          <div className='order-list-items' id='order-list'>
            <p className='empty-order-msg color-brown weight-500'>
              Os itens lançados irão aparecer aqui
            </p>
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
