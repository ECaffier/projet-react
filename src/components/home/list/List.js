import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Swapi from '../swapi/Swapi'
import {Link} from "react-router-dom"



function List(props) {
    return(
        <div className="col-12 col-sm-4 col-lg-3">
            <article className="bg-dark text-center py-5 my-2">
                <Link to="/detail"> 
                    <p>{props.list}</p> 
                </Link>
            </article>
        </div>
        )
}
export default List;



// function create cards
// function Cartes(props){
//     let caracs = props.caracs.map((carac) => 
//         <div className="col-4">
//             <Card className="card-body grey-color mb-5 text-center" style={{flex:'1', width: '18rem', height:'10rem' }}> {carac}
//             <Card.Body >
//             <Card.Text>pppp</Card.Text>
//             </Card.Body>
//             </Card>
//         </div>
//     );
//     return (
//         <Container>
//             <Row className="card-adjust"> 
//             {caracs}
//             </Row>          
//         </Container>

//     );
// }

// export default Cartes;  
// //functin create cards



// function Home(){
//     return(
//       <div className="container">
//         <Card className="grey-color col-12" style={{ width: '18rem' }}>
//           <Card.Body className="grey-color">
//             <Card.Title>Name</Card.Title>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     );
// }