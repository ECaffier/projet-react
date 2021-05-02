
import React from "react";
import List from "../list/List"
import Axios from "axios";



class Swapi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: null,
            lists: null
        }
    }

    componentDidMount(){
        Axios.get("https://swapi.dev/api/")
        .then((response) => {
            let lists = Object.keys(response.data).map((list)=>{
                return(
                     <List list={list} />
                )
            });
            this.setState({
                data: response.data,
                lists: lists
            })
        })    
    }
    render(){
        return(
            <section>
                <div className="row">
                    {this.state.lists}          
                </div>
            </section>
        )
    }
}

export default Swapi;