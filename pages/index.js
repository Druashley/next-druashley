import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Druashley</title>
        <meta name="description" content="Southern Oregon Software Developer" />
        <meta
          name="keywords"
          content="Southern Oregon, Oregon, Software Developer"
        />
        <link rel="icon" href="/druashley.svg" />
      </Head>
      <div className={styles.container}>
        <h1>
          Hi, I'm <span>Druashley</span>
        </h1>
        <h2>
          A fullstack web developer specializing in <span>React</span> and{" "}
          <span>Django</span>
        </h2>

        <h2>
          I can assist you with your website needs. Let<span>'</span>s build
          something together.
        </h2>
      </div>
    </div>
  );
}
