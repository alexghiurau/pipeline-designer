import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';

const Home = () => {
  return (
    <>
      <div className='bg-green-200 u-flex u-flex-column h-screen'>
        <div className='u-flex-grow-1 mt-10'>
          <div className='content'>
            <div className='frame p-3 content bg-white'>
              <div className='frame__body'>
                <div className='u-flex u-center'>
                  <Image
                    src='https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png'
                    width={300}
                    alt='logo'
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
                    <button className='btn--lg'>Documentation</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='u-flex-grow-0'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
