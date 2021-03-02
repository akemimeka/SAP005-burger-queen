/* eslint-disable object-shorthand */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import logo from '../../images/logo-horizontal-brown.png';
import Button from '../../components/Button';
import meatBurger from '../../images/menu-photos/burger-meat.png';
import chickenBurger from '../../images/menu-photos/burger-chicken.png';
import veggieBurger from '../../images/menu-photos/burger-veggie.png';
import frenchFries from '../../images/menu-photos/fries.png';
import onionRings from '../../images/menu-photos/onion-rings.png';
import water from '../../images/menu-photos/water.png';
import soda from '../../images/menu-photos/soda.png';
import InputRadioMenu from '../../components/InputRadioMenu';
import CompleteOrderedBurger from '../../components/CompleteOrderedBurger';
import TotalAndSend from '../../components/TotalAndSend';
import CompleteOrderedItem from '../../components/CompleteOrderedItem';

export default function MainMenu() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const currentUserToken = localStorage.getItem('currentUserToken');
  const tableNumber = localStorage.getItem('currentTable');
  const clientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${tableNumber} · ${clientName}`;
  const form = useRef(null);
  const resetInputs = () => setTimeout(() => form.current.reset(), 500);
  const [allProducts, setAllProducts] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [burgersByFlavor, setBurgersByFlavor] = useState([]);
  const [burgersByType, setBurgersByType] = useState([]);
  const [drinksByType, setDrinksByType] = useState([]);
  const [disableBurgerType, setDisableBurgerType] = useState(true);
  const [disableBurgerExtra, setDisableBurgerExtra] = useState(true);
  const [disableDrinkSize, setDisableDrinkSize] = useState(true);
  const [finalTotal, setFinalTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [finalOrder, setFinalOrder] = useState({
    client: clientName, table: tableNumber, products: products,
  });

  useEffect(() => {
    const apiProducts = `${apiURL}/products`;

    const getRequestOptions = {
      method: 'GET',
      headers: { Authorization: currentUserToken },
    };

    fetch(apiProducts, getRequestOptions)
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .catch((error) => console.log(error));
  }, [currentUserToken]);

  const filterByName = (list, name) => {
    const filteredItem = list.filter((item) => item.name === name || item.name.includes(name));
    return filteredItem;
  };

  const selectBurgerFlavor = (id) => {
    const burgerList = allProducts.filter((item) => item.flavor === id);
    setBurgersByFlavor(burgerList);
    setDisableBurgerType(false);
  };

  const selectBurgerType = (id) => {
    const burgerList = filterByName(burgersByFlavor, id);
    setBurgersByType(burgerList);
    setDisableBurgerExtra(false);
  };

  const selectBurgerExtra = (id) => {
    const word = (id !== 'none' ? id : null);
    const filteredList = burgersByType.filter((item) => item.complement === word);
    const burger = filteredList[0];
    setOrderList([...orderList, {
      id: burger.id,
      name: burger.name,
      flavor: burger.flavor,
      complement: burger.complement,
      sub_type: burger.sub_type,
      price: burger.price,
      qtd: 1,
    }]);
    setFinalTotal(finalTotal + burger.price);
    resetInputs();
  };

  const selectDrinkType = (id) => {
    const drinkList = filterByName(allProducts, id);
    setDrinksByType(drinkList);
    setDisableDrinkSize(false);
  };

  const selectDrinkSize = (id) => {
    const drink = filterByName(drinksByType, id)[0];
    setOrderList([...orderList, {
      id: drink.id,
      name: drink.name,
      sub_type: drink.sub_type,
      price: drink.price,
      qtd: 1,
    }]);
    setFinalTotal(finalTotal + drink.price);
    resetInputs();
  };

  const selectOneClickItem = (id) => {
    const item = filterByName(allProducts, id)[0];
    setOrderList([...orderList, {
      id: item.id,
      name: item.name,
      sub_type: item.sub_type,
      price: item.price,
      qtd: 1,
    }]);
    setFinalTotal(finalTotal + item.price);
    resetInputs();
  };

  const minusButton = (index, itemPrice) => {
    const newOrderList = [...orderList];

    if (newOrderList[index].qtd === 1) {
      newOrderList.splice(index, 1);
    } else {
      newOrderList[index].qtd -= 1;
    }
    setOrderList(newOrderList);
    setFinalTotal(finalTotal - itemPrice);
  };

  const plusButton = (index, itemPrice) => {
    const newOrderList = [...orderList];

    newOrderList[index].qtd += 1;
    setOrderList(newOrderList);
    setFinalTotal(finalTotal + itemPrice);
  };

  const itemTotalPrice = (price, quantity) => (
    (price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  );

  const removeAllItems = () => {
    setOrderList([]);
    setFinalTotal(0);
  };

  const sendOrder = () => {
    const apiOrders = `${apiURL}/orders`;
    const newOrder = orderList.map((item) => (
      { id: item.id, qtd: item.qtd }
    ));

    const orderProducts = [...products, ...newOrder];
    setProducts(orderProducts);
    const order = { ...finalOrder, products: orderProducts };
    setFinalOrder(order);

    const postRequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: currentUserToken,
      },
      body: JSON.stringify(order),
    };

    fetch(apiOrders, postRequestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('Pedido enviado para a cozinha com sucesso!');
      })
      .then(setProducts([]))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <form className='menu-grid-container' ref={form}>
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
              inputOnChange={selectBurgerFlavor}
              labelClass='label-item-box'
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemClassName='menu-item-name'
              menuItemText='Carne'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='frango'
              inputName='meat-options'
              inputValue='Hambúrg. de Frango'
              inputOnChange={selectBurgerFlavor}
              labelClass='label-item-box'
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemClassName='menu-item-name'
              menuItemText='Frango'
            />

            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='vegetariano'
              inputName='meat-options'
              inputValue='Hambúrg. Vegetariano'
              inputOnChange={selectBurgerFlavor}
              labelClass='label-item-box'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemClassName='menu-item-name'
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
              inputOnChange={selectBurgerType}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
              labelText='Simples'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='duplo'
              inputDisabled={disableBurgerType}
              inputName='burger-type'
              inputValue='double-burger'
              inputOnChange={selectBurgerType}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
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
              inputOnChange={selectBurgerExtra}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
              labelText='+ Queijo'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='ovo'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='egg'
              inputOnChange={selectBurgerExtra}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
              labelText='+ Ovo'
            />

            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='none'
              inputDisabled={disableBurgerExtra}
              inputName='burger-extra'
              inputValue='Sem extra'
              inputOnChange={selectBurgerExtra}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
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
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={frenchFries}
              menuItemDescription='Fritas'
              menuItemClassName='menu-item-name'
              menuItemText='Fritas'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='Anéis de cebola'
              inputName='extra-sides'
              inputValue='onion-rings'
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={onionRings}
              menuItemDescription='Anéis de cebola'
              menuItemClassName='menu-item-name'
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
              inputOnChange={selectDrinkType}
              labelClass='label-item-box'
              menuItemSrc={water}
              menuItemDescription='Água'
              menuItemClassName='menu-item-name'
              menuItemText='Água'
            />
            <MenuItem
              inputClass='hidden menu-item-name'
              inputId='Refrigerante'
              inputName='drinks-options'
              inputValue='soda'
              inputOnChange={selectDrinkType}
              labelClass='label-item-box'
              menuItemSrc={soda}
              menuItemDescription='Refrigerante'
              menuItemClassName='menu-item-name'
              menuItemText='Refrigerante'
            />
          </div>

          <div className='drink-size-wrap'>
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='500'
              inputName='drink-size'
              inputValue='500ml'
              inputOnChange={selectDrinkSize}
              inputDisabled={disableDrinkSize}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
              labelText='500ML'
            />
            <InputRadioMenu
              inputClass='hidden input-item-options'
              inputId='750'
              inputName='drink-size'
              inputValue='750ml'
              inputOnChange={selectDrinkSize}
              inputDisabled={disableDrinkSize}
              labelClass='label-item-options'
              menuItemClassName='menu-item-name'
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
            {
              orderList.length === 0
                ? <Fragment>
                  <p className='empty-order-msg color-brown weight-500'>
                    Os itens lançados irão aparecer aqui
                  </p>
                  <Link to='/salao'>
                    <Button
                      buttonType='text'
                      buttonClass='button-base button-centered bg-color-yellow color-brown'
                      buttonText='Voltar'
                    />
                  </Link>
                </Fragment>
                : orderList.map((item, index) => (
                  item.sub_type === 'hamburguer'
                    ? <CompleteOrderedBurger
                      key={`item-${index}`}
                      itemFlavor={item.flavor}
                      itemComplement={item.complement}
                      itemName={item.name}
                      itemPrice={item.price}
                      itemQuantity={item.qtd}
                      minusButton={() => minusButton(index, item.price)}
                      plusButton={() => plusButton(index, item.price)}
                      itemTotalPrice={itemTotalPrice(item.price, item.qtd)}
                    />
                    : <CompleteOrderedItem
                      key={`item-${index}`}
                      itemName={item.name}
                      itemPrice={item.price}
                      itemQuantity={item.qtd}
                      minusButton={() => minusButton(index, item.price)}
                      plusButton={() => plusButton(index, item.price)}
                      itemTotalPrice={itemTotalPrice(item.price, item.qtd)}
                    />
                ))
            }
          </div>

          <TotalAndSend
            totalPriceValue={finalTotal.toLocaleString(
              'pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 },
            )}
            sendOrderButton={() => sendOrder()}
            cancelOrderButton={() => removeAllItems()}
          />
        </aside>
      </form>
    </Fragment>
  );
}
