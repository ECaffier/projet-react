// import React from "react";
// import Axios from "axios";
// import Detail from "./Detail"


// class Spaceship extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             data: null,
//             details: null
//         }
//     }

//     componentDidMount(){
//         Axios.get("https://swapi.dev/api/")
//         .then((response) => {
//             let details = Object.keys(response.data).map((detail)=>{

//                 return <Detail detail={detail} />


//             });
//             this.setState({
//                 data: response.data,
//                 details: details,
//             })
//         })    
//     }
//     render(){
//         return(
//             <section>
//                 <div className="row">
//                     {this.state.details}   
//                 </div>
//             </section>
//         )
//     }
// }

// export default Spaceship;