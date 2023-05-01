import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';

const Home = () => {
  return (
    <>
      <h2>Pipeline Designer</h2>

      <p>View and edit pipelines right in the browser.</p>
      <p>Features include:</p>
      <ul>
        <li>Viewing pipelines</li>
        <li>... and more to come!</li>
      </ul>

      <Link href='/pipelines'>
        <button>Pipelines</button>
      </Link>
      <Link href=''>
        <button>Documentation</button>
      </Link>

      <Footer />
    </>
  );
};

export default Home;
