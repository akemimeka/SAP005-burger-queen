/* eslint-disable react/prop-types */
import React from 'react';

export default function YellowBox({
  divYellowBox,
  divYellowBoxMainMenu,
  divYellowBoxItens,
  divYellowBoxSides,
  divYellowBoxDrinks,
  divYellowBoxOrder,
}) {
  return (
    // <div className={divYellowBox}>
    <div className={divYellowBoxMainMenu}><h1>GRID WRAP</h1>
      {/* <h1>YellowBox</h1> */}
      <div className={divYellowBoxItens}><h1>ITENS</h1></div>
      <div className={divYellowBoxSides}><h1>ACOMPANHAMENTOS</h1></div>
      <div className={divYellowBoxDrinks}><h1>DRINKS</h1></div>
      <div className={divYellowBoxOrder}><h1>TOTAL</h1></div>
    </div>
  );
}
