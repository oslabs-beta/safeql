import Image from 'next/image';
import NavBar from './NavBar';

function Header() {
  return (
    <div className='flex justify-center p-2'>
      <Image
        src='/safeQL_name2.png'
        alt='SafeQL Logo'
        width={300}
        height={83}
        priority
      />
      <NavBar />
    </div>
  );
}

export default Header;
