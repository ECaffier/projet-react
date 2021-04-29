import React from "react";
import Card from "react-bootstrap/Card"


class Recherche extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            value: ""
        }
    }
        handleKeyPressed = () => {
            alert("pouet");
            <div>
                <p>salut</p>
            </div>

        }

    render(){
        return (
            <div>
                <input type="text" onKeyPress={this.handleKeyPressed} className="form-control d-inline w-50 marginSearch" />
            </div>
        );
    }
}
export default Recherche;