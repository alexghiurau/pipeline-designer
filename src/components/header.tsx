import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href={'/'}>Pipeline Designer</Link>

      <div>
        <Link href={'/pipelines'}>Pipelines</Link>
        <Link href={'/documentation'}>Docs</Link>
      </div>
    </>
  );
};

export default Header;
