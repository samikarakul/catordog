import { Cutie } from "../types/interfaces"
import Head from "next/head";
import style from "../styles/CutieList.module.css"
import { useRouter } from "next/router";
import Image from 'next/image';


const Cats = ({ cuties, cutieType }: { cuties: Cutie[], cutieType: string }) => {

    const router = useRouter();

    const handleClick = (name:string) => {
      router.push('/'+cutieType+'/'+name.split(' ').join("-").toLowerCase())
    }


    return (
      <div className={style.cutieContainer}>
        
        {cuties.map((cutie:Cutie) => (
          <div key={cutie.name} onClick={() => handleClick(cutie.name)}>
            <p>{cutie.name}</p>
            <Image src={cutie.image_link} width="200" height="200" alt=""/>
          </div>
        ))}

      </div>
  
  
    )
  }
  
  export default Cats
  