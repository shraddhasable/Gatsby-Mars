import React from "react"
import "./customerask.css"
import Buttonwhite from "./buttonwhite"

class Customerask extends React.Component {
    render(){
    return (
     
            <div className="row justify-content-center wrap">
                <div className="col-4 dummy">
                <div className="ask-cust-wrap">
                        <h2>Getting a Puppy?</h2>
                        <img src={require('../images/yogesh.jpg')} className="ask-img" alt="" />
                        <div className="ask-text">SOME TEXT</div>
                        <Buttonwhite />
                    </div>
                </div>
                <div className="col-4 dummy">
                    <div className="ask-cust-wrap">
                        <h2>How Old is Your Dog?</h2>
                        <img src={require('../images/how-old-is-your-dog-600.jpg')} className="ask-img" alt="" />
                        <div className="ask-text">SOME TEXT</div>
                        <Buttonwhite />
                    </div>
                </div>
            </div>
      
    );
    }
}
export default Customerask    
