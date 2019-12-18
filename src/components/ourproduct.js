import React from "react"
import "./ourproduct.css"
import Buttonwhite from "./buttonwhite"

class Ourproduct extends React.Component {
    render(){
    return (
        <div className="row bottom home-bottom ourproduct">
           <div id="MainContent_C010_Col00" className="sf_colsIn col-sm-6">
                    <div className="fca-container ">
                        {/* <h3>
                            Our Products
                        </h3> */}
                        <div className="fca-inner-container">
                            <img alt="Our Products" className="img-responsive lazy b-loaded" src={require('../images/723013-1-mars-ped-780-x-465_v2.jpg')} />
                            <h3>
                                Our Products
                            </h3>
                            <div className="fca-subtext-container">
                                <div className="table">
                                    <div className="cell middle">
                                        <p>
                                            Check out our full line of dry food,<br></br> wet food and treats!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="btn">Learn More</div> */}
                        <Buttonwhite/>
                   </div>
            </div>

            <div id="MainContent_C010_Col00" className="sf_colsIn col-sm-6">
                    <div className="fca-container ">
                        {/* <h3>
                            Our Products
                        </h3> */}
                        <div className="fca-inner-container">
                            <img alt="Our Products" className="img-responsive lazy b-loaded" src={require('../images/donate.jpg')} />
                            <h3>
                                Donate
                            </h3>
                            <div className="fca-subtext-container">
                                <div className="table">
                                    <div className="cell middle">
                                        <p>
                                        Donate to help feed more shelter dogs in need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="btn">Learn More</div> */}
                        <Buttonwhite/>
                   </div>
            </div>
        </div>
    );
    }
}
export default Ourproduct