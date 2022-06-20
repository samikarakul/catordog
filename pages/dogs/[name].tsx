import { GetStaticPaths, GetStaticProps } from "next";
import {GetDogs, GetDogByName, GetCats, GetDogNames} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import Image from "next/image";
import CompetitionEndDirect from "../../components/CompetitionEndDirect";
import {useEffect, useState} from "react";
import CutieCompetition from "../../components/CutieCompetition";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async() => {
    const dogs = await GetDogs();
    const paths = dogs.map((dog:Cutie) => {
        return {
            params: { name:dog.url },
        }
    })
    return { paths, fallback:false }
}

export const getStaticProps: GetStaticProps = async(context) => {
  let tmpName = typeof(context.params!.name) == "object" ? context.params!.name[0] : context.params!.name
  const cats = await GetDogNames();
  if(tmpName && !cats.includes(tmpName)) tmpName = tmpName.split("-").join(" ")
  const dog:Cutie = await GetDogByName(tmpName?.split("-").join(" "))
  const tmpCats = await GetCats();

  return{
    props: {
      name: dog.name,
      image_link: dog.image_link,
      cats: tmpCats
    }
  }
  }
  
const Dog = ({name, image_link, cats} : {name:string, image_link: string, cats: Cutie[]}) => {

  const [currentCat, setCurrentCat] = useState<Cutie>({name, image_link});
  const [isCompetitionEnd, setIsCompetitionEnd] = useState(false);

  const endCompetition = () => {
    setIsCompetitionEnd(true)
  }
  const changeCat = () => {
    const number = Math.floor(Math.random() * cats.length - 1);
    const cat = cats[number > 0 ? number : 0]
    setCurrentCat(cat)
  }

  useEffect(() => {
    changeCat();
  }, [cats])

  return (
    <div>
      <Head>
        <title>{name} or {currentCat.name}</title>
      </Head>
      {isCompetitionEnd ?  <CompetitionEndDirect cutieType="dog" /> : ""}
      <CutieCompetition image_link={image_link} changeCutie={changeCat} currentCutie={currentCat} endCompetition={endCompetition} cutieName={name}/>
    </div>
  )
}



export default Dog
