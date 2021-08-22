import Head from "next/head";
import Link from "next/link";
const Layout = ({ children, title, dark = false }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Kerim Hudson`
            : "Freelance Designer & Developer | Kerim Hudson"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`site-wrapper ${dark ? "bg-dark" : ""}`}>
        <header>
          <Link href="/">
            <a>
              <h1>Kerim Hudson</h1>
            </a>
          </Link>
          <nav>
            <Link href="/blog">
              <a>Blog</a>
            </Link>

            <a href="mailto:hey@kerim.sh?subject=Hey">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
