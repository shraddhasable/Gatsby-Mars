import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import SimpleSlider from "./carousal"
import Customerask from "./customerask"
import Homeheader from "./homeheader"
import Ourproduct from "./ourproduct"
import Whiteheader from "./whiteheader"
import Bottombanner from "./bottombanner"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
         
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
          <SimpleSlider />
          <Homeheader />
          <Whiteheader />
          <div className="innerWrap">
            <Customerask />
            <Ourproduct />
          </div>  
          <Bottombanner />        
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
