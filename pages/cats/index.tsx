import type { GetServerSideProps, GetStaticProps } from 'next'
import {GetCats} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import CutieList from "../../components/CutieList";
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async() => {
  const cats = await GetCats();
  return{
    props: {
      cats: cats
    }
  }
}


const Cats = ({ cats }: { cats: Cutie[] }) => {
  return (
    <div>
      <Head>
        <title>Choose your Cutie Cat!</title>
      </Head>
      <h2>Choose your Cutie Cat!</h2>
      <CutieList cuties={cats} cutieType="cats"/>
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

export default Cats
