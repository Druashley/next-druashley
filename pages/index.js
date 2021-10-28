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
        <h1>Druashley</h1>

        <h2>
          I'm an independent web developer with experience in React and Django
        </h2>

        <h2>I can assist you with your website needs.</h2>

        <h1>content headerer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          auctor scelerisque justo quis luctus. Vivamus eu consequat nibh.
          Suspendisse cursus felis eget justo hendrerit, id pharetra tortor
          feugiat. Nulla facilisi. Etiam feugiat, nibh in vestibulum tincidunt,
          neque massa convallis nisl, vitae sodales sem eros ut nulla. Proin
          libero magna, maximus sed nisi nec, consequat convallis nisl. Nullam
          fringilla lectus a augue mattis, quis vestibulum urna consectetur.
          Cras accumsan vulputate sem, quis posuere libero varius ac. Donec
          ipsum ipsum, ullamcorper nec feugiat sit amet, tincidunt et dolor.
          Aliquam interdum fringilla mi nec bibendum. Nullam tristique nunc sed
          quam pharetra condimentum. Vivamus a quam sit amet nibh ultrices
          pulvinar et id ligula. Morbi consectetur mauris nulla, ut scelerisque
          orci efficitur a. Nam sed risus ac erat dictum posuere.
        </p>
      </div>
    </div>
  );
}
