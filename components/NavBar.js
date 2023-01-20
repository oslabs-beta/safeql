import { useRouter } from "next/router";
import Link from "next/link";

const navigationRoutes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name : 'SchemaParser',
    path: '/schemaParser'
  }
];

function NavBar() {
  const router = useRouter();
  return (
    <div className='flex justify-center p-2'>
    <nav>
      {navigationRoutes.map((link, index)=> {
        return(
          <ul>
            <Link href={link.path}>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        )
      })}
    </nav>
    </div>
  );
}

export default NavBar;
