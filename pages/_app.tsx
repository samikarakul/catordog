import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {useRouter} from "next/router"
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {console.log("route change start on"); setIsLoading(true)} )
    router.events.on('routeChangeComplete', () => {console.log("route change Complete on"); setIsLoading(false)})
    router.events.on('routeChangeError', () => console.log("route change error on"))

    return () => {
      router.events.off('routeChangeStart', () => console.log("route change start off") )
      router.events.off('routeChangeComplete', () => console.log("route change Complete off"))
      router.events.off('routeChangeError', () => console.log("route change error off"))
    }
  }, [])
  return (
    <>
      <Head>
        <title>Cat or Dog</title>
      </Head>
      <Layout>
        {isLoading ? <Loading/> : 

            <Component {...pageProps} />
        }
      </Layout>
     
    </>
  )
}

export default MyApp
