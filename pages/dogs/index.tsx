import type { GetServerSideProps, GetStaticProps } from 'next'
import {GetDogs} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import CutieList from "../../components/CutieList";

export const getServerSideProps: GetServerSideProps = async() => {
  const dogs = await GetDogs();
  return{
    props: {
      dogs: dogs
    }
  }
}


const Dogs = ({ dogs }: { dogs: Cutie[] }) => {
  return (
    <div>
      <h1>Choose your Cutie Dog!</h1>
      <CutieList cuties={dogs} cutieType="dogs"/>

      <style jsx>
      {`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 3vh;
        }
        h1{
          margin-bottom: 3vh;
        }

      `}
      </style>
    </div>
  )
}

export default Dogs
