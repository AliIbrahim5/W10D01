import Link from "next/link";
import Image from "next/image";
import fotar from '../../styles/Home.module.css'
function Nav() {
  return (
    <ul className={fotar.title}>
      <li>
        <Image src="/moon.jpg" width={100} height={100} />
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Post">
          <a> Posts </a>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
