import { React, Fragment } from 'react';
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
  const getTableNumber = localStorage.getItem('currentTable');
  const getClientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${getTableNumber} · ${getClientName}`;

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
              inputId='burger-red-meat'
              inputName='meat-options'
              inputValue='red-meat'
              labelHtmlFor='burger-red-meat'
              labelClass='label-item-box'
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemText='Carne'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='burger-chicken-meat'
              inputName='meat-options'
              inputValue='chicken-meat'
              labelHtmlFor='burger-chicken-meat'
              labelClass='label-item-box'
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemText='Frango'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='burger-veggie-meat'
              inputName='meat-options'
              inputValue='veggie-meat'
              labelHtmlFor='burger-veggie-meat'
              labelClass='label-item-box'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='burger-type-wrap'>
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='burger-type-simple'
              inputName='burger-type'
              inputValue='simple-burger'
              labelHtmlFor='burger-type-simple'
              labelClass='label-item-options'
              labelText='Simples'
            />
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='burger-type-double'
              inputName='burger-type'
              inputValue='double-burger'
              labelHtmlFor='burger-type-double'
              labelClass='label-item-options'
              labelText='Duplo'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='extra-cheese'
              inputName='burger-extra'
              inputValue='cheese'
              labelHtmlFor='extra-cheese'
              labelClass='label-item-options'
              labelText='+ Queijo'
            />
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='extra-egg'
              inputName='burger-extra'
              inputValue='egg'
              labelHtmlFor='extra-egg'
              labelClass='label-item-options'
              labelText='+ Ovo'
            />
            <InputRadio
              inputClass='hidden input-item-options'
              inputId='extra-none'
              inputName='burger-extra'
              inputValue='none'
              labelHtmlFor='extra-none'
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
              inputId='fries-sides'
              inputName='extra-sides'
              inputValue='french-fries'
              labelHtmlFor='fries-sides'
              labelClass='label-item-box'
              menuItemSrc={frenchFries}
              menuItemDescription='Fritas'
              menuItemText='Fritas'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='onion-sides'
              inputName='extra-sides'
              inputValue='onion-rings'
              labelHtmlFor='onion-sides'
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

            <OrderedItem
              itemNameText='hamburg. de carne'
              itemPriceText=''
            />
            <OrderedItem
              itemNameText='duplo'
              itemPriceText='15,00'
            />
            <ItemQuantity
              itemQuantityText='01'
              itemTotalValue='20,00'
            />
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
