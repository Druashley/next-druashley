import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function contact() {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Southern Oregon Software Developer" />
        <meta
          name="keywords"
          content="Southern Oregon, Oregon, Software Developer"
        />
        <link rel="icon" href="/druashley.svg" />
      </Head>

      <div className={styles.container}>
        <h1>Contact Info here</h1>
      </div>
    </div>
  );
}
