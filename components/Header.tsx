import Image from 'next/image';
import NavBar from './NavBar';

function Header() {
  return (
    <div className='flex justify-center p-2'>
      <Image
        src='/safeql-light.png'
        alt='SafeQL Logo'
        width={180}
        height={14}
      />
      <NavBar />
    </div>
  );
}

export default Header;
