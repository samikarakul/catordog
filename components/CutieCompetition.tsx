import Image from "next/image"
import {useState} from "react"
import { Cutie } from "../types/interfaces"

function CutieCompetition(
    {image_link, cutieName, changeCutie, currentCutie, endCompetition} : 
        {image_link:string, cutieName:string, changeCutie: () => void , currentCutie:Cutie, endCompetition: () => void,}
                            ) {

    const [count, setCount] = useState(0);

  return (
    <div className="cutie-competition-container">
        {count ?  count==1 ?<p>You chose your cutie {count} time</p> : <p>You chose your cutie {count} times</p> : <p>{"You didn't choose any cutie yet..."}</p>}
        <div className="competition-image-button-container">
            
            <div>
                <button>
                    <p>{cutieName}</p>
                    <Image src={image_link} width="300" height="300" onClick={() => {changeCutie(); setCount(count + 1)}} layout="responsive" alt=""/>
                </button>
            </div>

                        
            {currentCutie ? 
                <div>
                    <button>
                        <p>{currentCutie.name}</p>
                        <Image src={currentCutie.image_link} width="300" height="300" onClick={endCompetition} layout="responsive" alt=""/>
                    </button> 
                </div>
                :
             ""}
        </div>

        <style jsx>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
            .cutie-competition-container p{
                margin-top: 5vh;
                text-align: center;
                font-size: 2.5vw;
                font-family: 'Indie Flower', cursive;
            }
            .competition-image-button-container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 10vw;
                margin-top: 15vh;
            }
            .competition-image-button-container button{
                border:none;
                padding: 1vh 1vw;
                box-shadow: 5px 5px 8px 5px black, -5px -5px 8px 3px black;
                transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
                cursor: pointer;
                width: 20rem;
                height: 20rem;
            }
            .competition-image-button-container button p{
                position: absolute;
                font-size: 1.5vw;
                transform: translate(0, -15vh);
            }
            .competition-image-button-container button:hover{
                box-shadow: 10px 10px 20px 5px black, -10px -10px 20px 3px black;
                transform: scale(1.1);
            }

            @media screen and (max-width: 800px)
            {
                .cutie-competition-container p{
                    font-size: 5vw;
                    margin-top: 3vh;
                }
                .competition-image-button-container{
                    grid-template-columns: 1fr;
                    grid-row-gap: 8vh;
                    margin-top: 5vh;
                }

                .competition-image-button-container div{
                    display: flex;
                }
                .competition-image-button-container button{
                    width: 13rem;
                    height: 13rem;
                    transform: translate(20vw, 0);
                }
                .competition-image-button-container button:hover{
                    transform: translate(20vw, 0);
                }
                .competition-image-button-container button p{
                    position: absolute;
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    align-items: center;                    
                    width: 10vw;
                    font-size: 3vw;
                    transform: translate(-25vw, -2vh);
                }
            }

            @media screen and (max-width: 400px)
            {
                .competition-image-button-container button{
                    width: 10rem;
                    height: 10rem;
                    transform: translate(15vw, 0);
                }
                .competition-image-button-container button:hover{
                    transform: translate(15vw, 0);
                }
            }
        `}
        </style>
    </div>
  )
}

export default CutieCompetition