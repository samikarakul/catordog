import type { GetServerSideProps, GetStaticProps } from 'next'
import {GetDogs} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import CutieList from "../../components/CutieList";
import Head from 'next/head';

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
      <Head>
        <title>Choose your Cutie Dog!</title>
      </Head>
      <h2>Choose your Cutie Dog!</h2>
      <CutieList cuties={dogs} cutieType="dogs"/>

      <style jsx>
      {`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 3vh;
        }
        h2{
          margin-bottom: 3vh;
        }

      `}
      </style>
    </div>
  )
}

export default Dogs
