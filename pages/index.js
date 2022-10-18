import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
      <>
          <Head>
              <title>NextJS Practice | Home</title>
              <meta name="keywords" content="nextjs"/>
          </Head>
          <div>
              <h1 className={styles.title}>Homepage</h1>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur</p>
              <Link href="/about">
                  <a className={styles.btn}>See About</a>
              </Link>
          </div>
      </>
  )
}
