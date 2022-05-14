import Link from 'next/link';
import '../styles/globals.css';
import navStyle from '../styles/nav.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={navStyle.nav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
