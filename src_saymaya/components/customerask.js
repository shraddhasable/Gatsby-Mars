import React from "react"
import "./customerask.css"

class Customerask extends React.Component {
    render(){
    return (
        <div className="ask-cust-wrap">
            <h2>Getting a Puppy?</h2>
            <img src={require('../images/dog2.jpg')} className="ask-img" />
            <div className="ask-text">SOME TEXT</div>
            <button>Learn More</button>
        </div>
    );
    }
}
export default Customerask    
