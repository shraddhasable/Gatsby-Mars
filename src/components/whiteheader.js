import React from "react"
import "./whiteheader.css"

class Whiteheader extends React.Component {
    render(){
    return (
        <div className="product-review-cta">
        <div className="row">
            <div className="col-sm-12 col-md-7 review-left">
                <h3>Share your opinion  on your favorite PEDIGREE® products.</h3>
            </div>
            <div className="col-sm-12 col-md-5 review-right">
                <div className="dropdown">
                    <div className="dropdown-toggle" data-toggle="dropdown">
                        Review A Product
                        <span className="caret"></span>
                    </div>
                  
                </div>
            </div>
        </div>

</div>
    );
    }
}
export default Whiteheader    

