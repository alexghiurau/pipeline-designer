import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h2>Pipeline Designer</h2>
      <p>View and edit pipelines right in the browser.</p>

      <p>Features include:</p>
      <ol>
        <li>Viewing pipelines</li>
        <li>... and more to come!</li>
      </ol>

      <Link href='/pipelines'>Pipelines</Link>
      <Link href=''>Docs</Link>
    </>
  );
};

export default Home;
