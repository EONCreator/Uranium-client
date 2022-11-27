import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from './../components/common/sidebar'
import NavBar from './../components/common/navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

    <div className={styles.container}>
      <Head>
        <title>Uranium</title>
        <meta name="description" content="Uranium - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

		<div className="content_layout">
		<SideBar></SideBar>
		<NavBar></NavBar>
		</div>
			
      <main className={styles.main}>
		
        <div className={styles.grid}>
			
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
