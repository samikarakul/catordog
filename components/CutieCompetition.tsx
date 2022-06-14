import Image from "next/image"
import { Cutie } from "../types/interfaces"

function CutieCompetition({image_link, changeCutie, currentCutie, endCompetition} : 
                        {image_link:string, changeCutie: () => void , currentCutie:Cutie, endCompetition: () => void}) {
  return (
    <div>
        <Image src={image_link} width="300" height="300" onClick={changeCutie}/>
        {currentCutie ? <Image src={currentCutie.image_link} width="300" height="300" onClick={endCompetition}/> : ""}

        <style jsx>
        {`
            div{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10vw;
                margin-top: 10vh !important;
            }
            @media screen and (max-width: 500px)
            {
                div{
                    grid-template-columns: 1fr;
                }
            }
        `}
        </style>
    </div>
  )
}

export default CutieCompetition