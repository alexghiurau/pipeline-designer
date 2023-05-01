import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <br />
      <Link href='/pipelines'>to pipelines</Link>
    </>
  );
};

export default Home;
