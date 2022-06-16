import type { GetServerSideProps, GetStaticProps } from 'next'
import {GetCats} from "../../ApiCalls";
import {Cutie} from "../../types/interfaces"
import CutieList from "../../components/CutieList";

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
      <h1>Choose your Cutie Cat!</h1>
      <CutieList cuties={cats} cutieType="cats"/>
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

export default Cats
