import React from 'react';

export default function Footer() {
  return (
    <footer className='footer bg-color-green'>
      <p className='footer-text color-brown weight-600'>
        Desenvolvido por&nbsp;
        <a href='https://github.com/akemimeka' title='GitHub' target="_blank" rel="noopener noreferrer" className='tag-link color-lightest'>Akemi Mitsueda</a>
        &nbsp;&&nbsp;
        <a href='https://github.com/crismantovani' title='GitHub' target="_blank" rel="noopener noreferrer" className='tag-link color-lightest'>Cris Mantovani</a>
        &emsp;|&emsp;Copyright 2021
      </p>
    </footer>
  );
}
