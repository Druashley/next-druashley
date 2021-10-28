import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function projects() {
  return (
    <div className={styles.project}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Southern Oregon Software Developer" />
        <meta
          name="keywords"
          content="Southern Oregon, Oregon, Software Developer"
        />
        <link rel="icon" href="/druashley.svg" />
      </Head>

      <div className={styles.container}>
        <h1>Project Info here</h1>
        <p>kjashdaksjhdaskjdhaskjdhasdas</p>
      </div>
    </div>
  );
}
