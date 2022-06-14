import type { NextPage } from 'next'
// import type { LinkProps } from 'next/link'
import NextLink from 'next/link';
import styles from '../styles/Home.module.css'
import {FaCat, FaDog} from "react-icons/fa"

const Home: NextPage = () => {
  return (
    <div className={styles.buttonContainer}>
        <NextLink href="/cats"><a><FaCat/> <span>Cats</span></a></NextLink>
        <NextLink href="/dogs"><a><FaDog/> <span>Dogs</span></a></NextLink>
    </div>


  )
}

export default Home
