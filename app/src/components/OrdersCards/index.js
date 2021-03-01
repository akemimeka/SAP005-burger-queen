/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function OrdersCards({
}) {
  return (
    <Fragment>
      <div className='cards-row'>
        <div className='cards-column'>
          <div className='card'>
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className='cards-row'>
          <div className='cards-column'>
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
