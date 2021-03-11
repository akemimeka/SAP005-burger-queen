/* eslint-disable no-console */
import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GoToPage, setLocalStorage, GetAllOrders, UpdateOrderStatus } from '../../services';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import InputRadio from '../../components/InputRadio';
import HallTables from '../HallTables';
import OrderCard from '../../components/OrderCard';
import OrderProducts from '../../components/OrderProducts';

export default function Hall() {
  const history = useHistory();
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [hallTablesClass, setHallTablesClass] = useState('hall-orders-container');
  const [hallOrdersClass, setHallOrdersClass] = useState('hidden');
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    GetAllOrders(setAllOrders);
  }, []);

  function saveDataAndGoToMenu(event, path) {
    event.preventDefault();
    setLocalStorage('currentClient', clientName);
    setLocalStorage('currentTable', tableNumber);
    GoToPage(history, path);
  }

  const showTables = () => {
    setHallTablesClass('hall-orders-container');
    setHallOrdersClass('hidden');
  };

  const showHallOrders = () => {
    setHallTablesClass('hidden');
    setHallOrdersClass('hall-orders-container');
  };

  return (
    <Fragment>
      <Header
        headerClass='header-base bg-color-yellow'
        headerLogoLink='/salao'
        logoSrc={logo}
        workAreaClass='header-title-base color-brown'
        workAreaText='Salão'
        divLogoutClass='align-right weight-500'
        workerRoleClass='header-role-base color-brown'
        workerRoleText='Atendente'
        workerNameClass='header-name-base color-brown'
        buttonLogoutClass='button-logout-base bg-color-light color-brown'
      />

      <main className='main-container-base'>
        <div className='orders-options-container'>
          <InputRadio
            inputClass='input-hall-options hidden'
            inputId='hall-tables'
            inputName='hall-options'
            inputValue='hall-tables'
            inputOnChange={(event) => showTables(event.target.checked)}
            labelHtmlFor='hall-tables'
            labelClass='label-hall-options button-base'
            labelText='Anotar novo pedido'
          />
          <InputRadio
            inputClass='input-hall-options hidden'
            inputId='hall-orders'
            inputName='hall-options'
            inputValue='hall-orders'
            inputOnChange={(event) => showHallOrders(event.target.checked)}
            labelHtmlFor='hall-orders'
            labelClass='label-hall-options button-base'
            labelText='Acompanhar pedidos'
          />
        </div>

        <div className={hallTablesClass}>
          <HallTables
            tableNumber={tableNumber}
            clientName={clientName}
            inputRadioOnChange={(event) => setTableNumber(event.target.value)}
            inputTextOnChange={(event) => setClientName(event.target.value)}
            mainMenuOnClick={(event) => saveDataAndGoToMenu(event, '/menu-principal')}
            breakfastMenuOnClick={(event) => saveDataAndGoToMenu(event, '/menu-matinal')}
          />
        </div>

          <section className={hallOrdersClass}>
            {allOrders.map((order, index) => (
              (order.status === 'ready' || order.status === 'done')
              && <OrderCard
                key={`order-${index}`}
                orderNumber={order.id}
                clientName={order.client_name}
                workerId={order.user_id}
                tableNumber={order.table}
                orderStatus={order.status}
                orderProcessed={order.processedAt}
                orderCreatedAt={order.createdAt}
                updatedAt={order.updatedAt}
                orderProducts={order.products}
                updateOrderToDone={() => UpdateOrderStatus(index, order.id, 'done', allOrders, setAllOrders)}
              >
                {order.Products.map((product, productIndex) => (
                  <OrderProducts
                    key={`${order.id}-item-${productIndex}`}
                    name={product.name}
                    qtd={product.qtd}
                    flavor={product.flavor}
                    complement={product.complement}
                  />
                ))}
              </OrderCard>
            ))}
          </section>
      </main>

    </Fragment>
  );
}
