import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import navStyles from "../styles/Nav.module.css";
export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.container}>
        <Logo />
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
