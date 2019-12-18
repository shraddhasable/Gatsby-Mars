import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#FFB10E`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1170,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  
<div id="FooterContent_T2B341F4F004_Col00" class="sf_colsIn col-md-9" data-sf-element="Column 1" data-placeholder-label="Column 1">
    <div class="footer-nav primary">
        <ul>
                <li><a href="https://www.google.co.in"  rel="noopener noreferrer" target="_blank">Buy Now</a></li>
                <li><a href="https://www.google.co.in" rel="noopener noreferrer" target="_blank">FAQs</a></li>
                <li><a href="https://www.google.co.in" rel="noopener noreferrer" target="_blank">About Us</a></li>
                <li><a href="https://www.google.co.in" rel="noopener noreferrer" target="_blank">Contact Us</a></li>
                <li><a href="https://www.google.co.in"  rel="noopener noreferrer" target="_blank">Foundation</a></li>
                <li><a href="https://www.google.co.in"  rel="noopener noreferrer" target="_blank">Location Selector</a></li>
                <li><a href="https://www.google.co.in" rel="noopener noreferrer" target="_blank">Sitemap</a></li>
        </ul>
    </div>
    <div class="footer-nav secondary">
        <ul>
                <li><a href="http://www.mars.com/global/policies/privacy/pp-english"  rel="noopener noreferrer"target="_blank">Privacy Policy</a></li>
                <li><a href="https://www.mars.com/cookies-english" rel="noopener noreferrer" target="_blank">Cookies Notice</a></li>
               
                <li><a href="https://www.mars.com/legal"  rel="noopener noreferrer" target="_blank">Legal</a></li>
                <li><a href="https://www.mars.com/modern-slavery-act" rel="noopener noreferrer" target="_blank">Modern Slavery Act</a></li>
                <li><a href="https://www.mars.com/modern-slavery-act"  rel="noopener noreferrer" target="_blank">Modern Slavery Act</a></li>
                <li><a href="https://www.mars.com/modern-slavery-act" rel="noopener noreferrer" target="_blank">Modern Slavery Act</a></li>
                <li><a href="http://www.mars.com/global/about-mars/mars-pia/our-supply-chain/supplier-relationships.aspx" rel="noopener noreferrer"   target="_blank">Supply Chain Transparency</a></li>
                <li><a href="https://www.mars.com/mars-incorporated-adchoices-united-states" rel="noopener noreferrer" target="_blank">Ad Choices</a></li>
                <li><a href="https://www.mars.com/accessibility" target="_blank" rel="noopener noreferrer">Accessibility</a></li>
        </ul>
    </div>
    <div class="copyright">
    <div><p>© 2019 Mars and Affiliates.</p></div>    
  </div>
  </div>
  <div id="FooterContent_T2B341F4F004_Col01" class="sf_colsIn col-md-3" data-sf-element="Column 2" data-placeholder-label="Column 2">
    
  <ul className="footer-nav social-ic">
    <li>
      <a href="https://www.facebook.com/Pedigree/" target="_blank"  rel="noopener noreferrer">
          <span className="fa fa-facebook socialmedia__icon"></span>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/pedigreeus/?utm_source=ig_profile_share&amp;igshid=pr5fi4viz1ur" target="_blank"  rel="noopener noreferrer">
           <span className="fa fa-insta socialmedia__icon"></span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/pedigreeus" target="_blank"  rel="noopener noreferrer">
            <span className="fa fa-twitter socialmedia__icon"></span>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/user/pedigreebrand" target="_blank"  rel="noopener noreferrer">
          <span className="fa fa-youtube socialmedia__icon"></span>
      </a>
    </li>
  </ul>
    

      {/* <ul id="navlist"> 
            <li className="fb-icon"><a aria-label="" href="https://www.google.co.in"></a></li>
            <li className="insta-icon"><a aria-label="" href="https://www.google.co.in"></a></li> 
            <li className="twitter-icon"><a aria-label="" href="https://www.google.co.in"></a></li> 
            <li className="youtube-icon"><a aria-label="" href="https://www.google.co.in"></a></li> 
      </ul> */}





    </div>

    </div>


  
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
