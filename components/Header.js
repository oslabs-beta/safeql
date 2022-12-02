import Image from 'next/image';

function Header() {
  return (
    <div className='flex justify-center'>
      <Image
        src='/safeql-light.png'
        alt='SafeQL Logo'
        width={200}
        height={16}
      />
    </div>
  );
}

export default Header;
