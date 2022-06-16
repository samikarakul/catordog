import Image from "next/image"
import GRUMPY_CAT from "../public/grumpy-cat.png"
import SAD_DOG from '../public/sad-shiba.png'
import { useRouter } from "next/router";

const Cats = ({cutieType}: {cutieType:string}) => {

    const router = useRouter();

    setTimeout(() => {
        cutieType == "cat" ? router.push("/cats") : router.push("/dogs")
    }, 4000)
    return (
        <div className="toast">
            <div>
                {cutieType == "cat" ?  <Image src={GRUMPY_CAT} width="200" height="200"/> : <Image src={SAD_DOG} width="200" height="200"/>}
            </div>
            <style jsx>
            {`

                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

                .toast{
                    position: absolute;
                    top: 0;
                    left:0;
                    width: 100vw;
                    height: 100vh;
                    background-color: black;
                    opacity: 0;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    animation: toast-show 5s ease-in;
                }
                .toast::after{
                    content: 'Okay...';
                    background-color: #dc9015;
                    margin-top: ${ cutieType == "dog" ? '-5vh' : '0'};
                    width: 25vw;
                    height: 15vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    opacity: 1;
                    font-size: 2vw;
                    font-family: 'Permanent Marker', cursive;
                    border-radius: 50px;
                    box-shadow: 1px 1px 100px 10px #982dcd, -1px -1px 100px 20px #d52a77;
                }

                @media screen and (max-width: 500px){
                    .toast::after{
                        font-size: 4vw;
                    }
                }
                @keyframes toast-show{
                    0%{
                        opacity: 0;
                    }
                    20%{
                        opacity: 0.9;
                    }
                    100%{
                        opacity: 0.9;
                    }
                }
            `}
            </style>
        </div>
    )
  }
  
  export default Cats
  