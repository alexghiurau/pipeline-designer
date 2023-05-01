import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-0'>
        <h6 className='footer__title text-white uppercase'>
          Pipeline Designer
        </h6>
        <div className='content'>
          <div className='divider'></div>

          <div className='row'>
            <div className='col'>
              <ul className='no-bullets'>
                <Link className='footer__list-item' href='/'>
                  Home
                </Link>
              </ul>
            </div>
            <div className='col'>
              <ul className='no-bullets'>
                <Link className='footer__list-item' href=''>
                  Documentation
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <p className='subtitle'>
          Alex Ghiurau © 2023 - {new Date().getFullYear()}.
        </p>
      </footer>
    </>
  );
};

export default Footer;
