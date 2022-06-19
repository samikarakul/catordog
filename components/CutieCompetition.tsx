import Image from "next/image"
import { Cutie } from "../types/interfaces"

function CutieCompetition({image_link, changeCutie, currentCutie, endCompetition} : 
                        {image_link:string, changeCutie: () => void , currentCutie:Cutie, endCompetition: () => void}) {
  return (
    <div>
        <button><Image src={image_link} width="300" height="300" onClick={changeCutie} layout="responsive" alt=""/></button>
        {currentCutie ? <button><Image src={currentCutie.image_link} width="300" height="300" onClick={endCompetition} layout="responsive" alt=""/></button> : ""}

        <style jsx>
        {`
            div{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 10vw;
                margin-top: 10vh;
            }
            div button{
                border:none;
                padding: 1vh 1vw;
                box-shadow: 5px 5px 8px 5px black, -5px -5px 8px 3px black;
                transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
                cursor: pointer;
                width: 20rem;
                height: 20rem;
            }
            div button:hover{
                box-shadow: 10px 10px 20px 5px black, -10px -10px 20px 3px black;
                transform: scale(1.1);
            }

            @media screen and (max-width: 800px)
            {
                div{
                    grid-template-columns: 1fr;
                    grid-row-gap: 5vh;
                    margin-top: 5vh;
                }
                div button{
                    width: 18rem;
                    height: 18rem;
                }
            }
        `}
        </style>
    </div>
  )
}

export default CutieCompetition