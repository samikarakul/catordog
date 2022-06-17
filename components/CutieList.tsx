import { Cutie } from "../types/interfaces"
import Head from "next/head";
import style from "../styles/CutieList.module.css"
import { useRouter } from "next/router";
import Image from 'next/image';

const Cats = ({ cuties, cutieType }: { cuties: Cutie[], cutieType: string }) => {

    const router = useRouter();
    return (
      <div className={style.cutieContainer}>
        <Head>
          <title>Choose Your Cutie!</title>
        </Head>
        {cuties.map((cutie:Cutie) => (
          <div key={cutie.name} onClick={() => router.push('/'+cutieType+'/'+cutie.name.split(' ').join("-").toLowerCase())}>
            <p>{cutie.name}</p>
            <Image src={cutie.image_link} width="200" height="200" alt=""/>
          </div>
        ))}

      </div>
  
  
    )
  }
  
  export default Cats
  