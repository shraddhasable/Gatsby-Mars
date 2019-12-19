import React from "react"
import "./bottombanner.css"

class Bottombanner extends React.Component {
    render(){
    return (
        <div id="BottomFullWidth" className="bottom-banner">
            <img className="img-responsive" src={require('../images/dog-with-boy.jpg')} title="Dog with boy" alt="Dog with boy" /> 
        </div>
    );
    }
}
export default Bottombanner    
