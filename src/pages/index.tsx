import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer';

const Home = () => {
  return (
    <>
      <div className='hero fullscreen bg-green-300'>
        <div className='hero-body'>
          <div className='content'>
            <div className='frame px-3 py-3 content max-w-40p bg-white'>
              <div className='frame__body'>
                <div className='u-flex u-center'>
                  <img
                    src='https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png'
                    className='max-w-30p'
                  />
                </div>
                <h2>Pipeline Designer</h2>
                <p>View and edit pipelines right in the browser.</p>

                <p>Features include:</p>
                <ul>
                  <li>Viewing pipelines</li>
                  <li>... and more to come!</li>
                </ul>

                <div className='divider'></div>
                <div className='u-flex u-justify-center'>
                  <Link href='/pipelines'>
                    <button className='btn--lg'>Pipelines</button>
                  </Link>
                  <Link href=''>
                    <button className='btn--lg'>Docs</button>
                  </Link>
                </div>
                <div className='space'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
