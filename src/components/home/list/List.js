import Card from "react-bootstrap/Card"


function Cartes(props){
    let caracs = props.caracs.map((carac) => 
        <div >
            <Card className="card-body grey-color mb-5 box" style={{flex:'1', width: '18rem', height:'10rem' }}>{carac}
            <Card.Body >
            <Card.Text>pppp</Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
    return (
        <div className="grid">
            {caracs}
        </div>

    );
}

// function Home(){w
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
export default Cartes;