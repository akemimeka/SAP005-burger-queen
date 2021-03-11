/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import modalLogo from '../../images/logo-circular-brown.png';
import ModalKitchen from '../../components/ModalKitchen';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import logo from '../../images/logo-horizontal-brown.png';
import americanCoffee from '../../images/menu-photos/coffee.png';
import hotLatte from '../../images/menu-photos/latte.png';
import grilledSandwich from '../../images/menu-photos/grilled-ham-cheese.png';
import naturalJuice from '../../images/menu-photos/juice.png';
import Button from '../../components/Button';
import CompleteOrderedItem from '../../components/CompleteOrderedItem';
import TotalAndSend from '../../components/TotalAndSend';

export default function BreakfastMenu() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const currentUserToken = localStorage.getItem('currentUserToken');
  const tableNumber = localStorage.getItem('currentTable');
  const clientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${tableNumber} · ${clientName}`;
  const form = useRef(null);
  const resetInputs = () => setTimeout(() => form.current.reset(), 500);
  const [allProducts, setAllProducts] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [finalOrder, setFinalOrder] = useState({
    client: clientName, table: tableNumber, products: products,
  });
  const [showModal, setShowModal] = useState(false);

  // Close Modal with keyboard (Esc key)
  const keyPress = useCallback((event) => {
    if (event.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress],
  );

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
    const filteredItem = list.filter((item) => item.name === name);
    return filteredItem;
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

  const minusButton = (event, index, itemPrice) => {
    event.preventDefault();
    const newOrderList = [...orderList];

    if (newOrderList[index].qtd === 1) {
      newOrderList.splice(index, 1);
    } else {
      newOrderList[index].qtd -= 1;
    }
    setOrderList(newOrderList);
    setFinalTotal(finalTotal - itemPrice);
  };

  const plusButton = (event, index, itemPrice) => {
    event.preventDefault();
    const newOrderList = [...orderList];

    newOrderList[index].qtd += 1;
    setOrderList(newOrderList);
    setFinalTotal(finalTotal + itemPrice);
  };

  const itemTotalPrice = (price, quantity) => (
    (price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  );

  const removeAllItems = (event) => {
    event.preventDefault();
    setOrderList([]);
    setFinalTotal(0);
  };

  const sendOrder = (event) => {
    event.preventDefault();
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
        if (data !== undefined) {
          setShowModal(true);
        }
        console.log(data);
        console.log('Pedido enviado para a cozinha com sucesso!');
      })
      .then(() => {
        setProducts([]);
        localStorage.removeItem('currentTable');
        localStorage.removeItem('currentClient');
      })
      // .then(GoToPage(history, '/salao'))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      {showModal ? (
        <ModalKitchen
          modalSrc={modalLogo}
          buttonText='Voltar para o salão'
          modalText='Pedido enviado para a cozinha com sucesso!'
          onClose={() => setShowModal(false)}
        >
        </ModalKitchen>) : null}
      <form className='breakfast-grid-container' ref={form}>
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
              inputId='Café americano'
              inputName='hot-drinks'
              inputValue='Café americano'
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={americanCoffee}
              menuItemDescription='Café americano'
              menuItemClassName='breakfast-item-name'
              menuItemText='Café americano'
            />

            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Café com leite'
              inputName='hot-drinks'
              inputValue='Café com leite'
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={hotLatte}
              menuItemDescription='Café com leite'
              menuItemClassName='breakfast-item-name'
              menuItemText='Café com leite'
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-sandwiches bg-color-yellow-20'>
          <h3 className='menu-section-title'>Sanduíches</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Misto quente'
              inputName='sandwiches'
              inputValue='Misto quente'
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={grilledSandwich}
              menuItemDescription='Misto quente'
              menuItemClassName='breakfast-item-name'
              menuItemText='Misto quente'
            />
          </div>
        </section>

        <section className='menu-grid-child menu-section-container main-menu-icedrinks bg-color-yellow-20'>
          <h3 className='menu-section-title'>Bebidas Frias</h3>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='hidden breakfast-item-name'
              inputId='Suco de fruta natural'
              inputName='iced-drinks'
              inputValue='Suco natural'
              inputOnChange={selectOneClickItem}
              labelClass='label-item-box'
              menuItemSrc={naturalJuice}
              menuItemDescription='Suco natural'
              menuItemClassName='breakfast-item-name'
              menuItemText='Suco de fruta'
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
                  <CompleteOrderedItem
                    key={`item-${index}`}
                    itemName={item.name}
                    itemPrice={item.price}
                    itemQuantity={item.qtd}
                    minusButton={(event) => minusButton(event, index, item.price)}
                    plusButton={(event) => plusButton(event, index, item.price)}
                    itemTotalPrice={itemTotalPrice(item.price, item.qtd)}
                  />
                ))
            }
          </div>

          <TotalAndSend
            totalPriceValue={finalTotal.toLocaleString(
              'pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 },
            )}
            sendOrderButton={(event) => sendOrder(event)}
            cancelOrderButton={(event) => removeAllItems(event)}
          />
        </aside>
      </form>
    </Fragment>
  );
}
