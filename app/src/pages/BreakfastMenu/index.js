/* eslint-disable object-curly-newline */
import React, { Fragment, useState } from 'react';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import logo from '../../images/logo-horizontal-brown.png';
import americanCoffee from '../../images/menu-photos/coffee.png';
import hotLatte from '../../images/menu-photos/latte.png';
import grilledSandwich from '../../images/menu-photos/grilled-ham-cheese.png';
import naturalJuice from '../../images/menu-photos/juice.png';
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
  const [selectedItem, setSelectedItem] = useState([]);

  const requestOptions = {
    method: 'GET',
    headers: { Authorization: currentUserToken },
  };

  fetch(apiProducts, requestOptions)
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log(error));

  const filterByName = (list, name) => {
    const filteredItem = list.filter((item) => item.name === name || item.name.includes(name));
    console.log('selected item', filteredItem[0]);
    setSelectedItem(filteredItem[0]);
  };

  const onClickItem = (id) => {
    filterByName(products, id);
  };

  return (
    <Fragment>
      <div className='breakfast-grid-container'>
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

        <section className='menu-grid-child menu-section-container main-menu-coffees bg-color-yellow-20'>
          <h3 className='menu-section-title'>Bebidas Quentes</h3>
          <div className='breakfast-menu-options'>
            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Coffee'
              inputName='hot-drinks'
              inputValue='Café Americano'
              inputOnChange={onClickItem}
              labelClass='label-item-box'
              menuItemSrc={americanCoffee}
              menuItemDescription='Café Americano'
              menuItemClassName='breakfast-item-name'
              menuItemText='Café Americano'
            />

            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Latte'
              inputName='hot-drinks'
              inputValue='Café com Leite'
              inputOnChange={onClickItem}
              labelClass='label-item-box'
              menuItemSrc={hotLatte}
              menuItemDescription='Café com Leite'
              menuItemClassName='breakfast-item-name'
              menuItemText='Café com Leite'
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-sandwiches bg-color-yellow-20'>
          <h3 className='menu-section-title'>Sanduíches</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Misto Quente'
              inputName='sandwiches'
              inputValue='Misto Quente'
              inputOnChange={onClickItem}
              labelClass='label-item-box'
              menuItemSrc={grilledSandwich}
              menuItemDescription='Misto Quente'
              menuItemClassName='breakfast-item-name'
              menuItemText=' Misto Quente '
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-icedrinks bg-color-yellow-20'>
          <h3 className='menu-section-title'>Bebidas Frias</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Suco Natural'
              inputName='iced-drinks'
              inputValue='Suco Natural'
              inputOnChange={onClickItem}
              labelClass='label-item-box'
              menuItemSrc={naturalJuice}
              menuItemDescription='Suco Natural'
              menuItemClassName='breakfast-item-name'
              menuItemText='Suco Natural'
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
