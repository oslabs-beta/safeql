import { useRouter } from 'next/router';
import Link from 'next/link';

const navigationRoutes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'SchemaParser',
    path: '/schemaParser',
  },
];

function NavBar() {
  const router = useRouter();
  return (
    <div className='flex justify-center mr-7 mt-1 absolute right-0'>
      <nav className='flex flex-row justify-center content-center'>
        {navigationRoutes.map((link, index) => {
          return (
            <ul className='p-2 mx-2 bg-blue-300 rounded-md hover:bg-blue-200 cursor-pointer'>
              <Link href={link.path}>
                <li className='font-bold' key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;
