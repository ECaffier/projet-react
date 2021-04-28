import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Cartes from "./list/List"

function Home(){
  const CARACS =["Name", "Height", "mass", "films"]
  return(
      <Cartes caracs={CARACS} />
      
  )
}

export default Home;

