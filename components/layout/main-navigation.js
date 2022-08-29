import classes from "./main-navigation.module.css";
import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* adding anchor tag because Link only adds it when it is plain text */}
        {/* Logo is HTML file */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;