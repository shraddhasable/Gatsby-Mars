import React from "react"
import "./headerarea.css"

class Head extends React.Component {
    render(){
    return (
        <>
         <div className="hero-image">		
				{/* <h1>2019 World’s Cutest Rescue Pet </h1> */}
				<img src={require('../images/dog-facts.jpg')} className="logo-b" alt="Pedigree banner" />
    
			  {/* <img src="dog-facts.jpg" className="logo-b" /> */}
			  <div class="centered">
				<h1>Puppy &amp; Dog Facts</h1>
				</div>
                <img src="https://www.pedigree.com/images/default-source/icons/pedigree-magnifyng-glass-bone-icon.png?sfvrsn=8ff66149_4" alt="white magnifying glass looking at orange bone icon" className="icon"/>           
			  
		</div>
            
        </>
    );
    }
}
export default Head