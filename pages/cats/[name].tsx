import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import {GetCats, GetCatByName, GetDogs, GetCatNames} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import Image from "next/image";
import CompetitionEndDirect from "../../components/CompetitionEndDirect";
import {useEffect, useState} from "react";
import CutieCompetition from "../../components/CutieCompetition";

export const getStaticPaths: GetStaticPaths = async() => {
    const cats = await GetCats();
    const paths = cats.map((cat:Cutie) => {
        return {
            params: { name: cat.url },
        }
    })
    return { paths, fallback:false }
}
export const getStaticProps: GetServerSideProps = async(context) => {
    let tmpName = typeof(context.params!.name) == "object" ? context.params!.name[0] : context.params!.name
  
    const cats = await GetCatNames();
    if(tmpName && !cats.includes(tmpName)) tmpName = tmpName.split("-").join(" ")
    const cat:Cutie = await GetCatByName(tmpName);
    const tmpDogs = await GetDogs();

    return{
      props: {
        name: cat.name,
        image_link: cat.image_link,
        dogs: tmpDogs
      }
    }
  }
  
const Cat = ({name, image_link, dogs} : {name:string, image_link: string, dogs: Cutie[]}) => {
 
  const [currentDog, setCurrentDog] = useState<Cutie>({name, image_link});
  const [isCompetitionEnd, setIsCompetitionEnd] = useState(false);

  const endCompetition = () => {
    setIsCompetitionEnd(true)
  }
  const changeDog = () => {
    const number = Math.floor(Math.random() * dogs.length - 1);
    const dog = dogs[number > 0 ? number : 0]
    setCurrentDog(dog)
  }

  useEffect(() => {
    changeDog();
  }, [dogs])
  return (
    <div>
      {isCompetitionEnd ?  <CompetitionEndDirect cutieType="cat" /> : ""}
      <CutieCompetition image_link={image_link} changeCutie={changeDog} currentCutie={currentDog} endCompetition={endCompetition}/>
    </div>
  )
}



export default Cat
