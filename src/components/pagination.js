import React from "react"
import "./pagination.css"

class Paginations extends React.Component {
    render(){
    return (
        <>
             <div className="container color-white">
                 <div className="article-list">
                			
                    <div className="pagination-container articles-pagination">
                            <div className="pagination-summary hidden-xs hidden-sm">
                                1-3 of 44 Articles
                            </div>
                    <div className="pedigree-pagination">
                        <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank"className="view-all hidden-xs hidden-sm">View All</a>

                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="prev arrow">◀</a>
                                <a className="desktopPageLinks visible" href="https://www.google.com/" rel="noopener noreferrer" target="_blank"><strong>1</strong></a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">2</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">3</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank"  className="desktopPageLinks visible">4</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">5</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank"  className="desktopPageLinks visible">6</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">7</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">8</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">9</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">10</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">11</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">12</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">13</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">14</a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">15</a>
                        <span className="mobilePageLinks">
                            1 / 15
                        </span>
                            <a className="arrow" href="https://www.google.com/" rel="noopener noreferrer" target="_blank">▶</a>
                    </div>

                    </div>

            <div className="article-wrap">
                <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-6">
                        <img src={require('../images/ped_74784_oct-people-article-banner.jpg')} className="logo-b" alt="Pedigree banner" />
                    </div>
                    <div className="col-sm-9 col-md-6 col-lg-6">
                    <div className="article-text">
                            <h3>2018 World’s Cutest Rescue Pet </h3>
                            <p>Congratulations to PEOPLE MAGAZINE’S 2018 World’s Cutest Rescue Dog Winner and runners up. Check out our rescue winners’ tales of love, hope and happily ever after.</p>
                            <span className="more" rel="noopener noreferrer" target="_blank" href="https://www.google.com/">READ MORE <i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                    </div>
                    </div>
                </div><hr />
                <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-6">
                        <img src={require('../images/hikerfrenchie.jpg')} className="logo-b" alt="Pedigree banner" />
                    </div>
                    <div className="col-sm-9 col-md-6 col-lg-6">
                    <div className="article-text">
                            <h3>Scenic Drives </h3>
                            <p>There’s no better time to load up the car and hit the road for a good, old-fashioned trip with your fur family. Dogs love road trips and we have a few you’re sure to love. From coastal retreats, mountain expeditions or a relaxing drive through the plains, we’ve got the route perfect for you both.</p>
                            <span className="more" rel="noopener noreferrer" target="_blank" href="https://www.google.com">READ MORE <i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                    </div>
                    </div>
                </div><hr />
                <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-6">
                        <img src={require('../images/camperjack.jpg')} className="logo-b" alt="Pedigree banner" />
                    </div>
                    <div className="col-sm-9 col-md-6 col-lg-6">
                    <div className="article-text">
                            <h3>Pack Up </h3>
                            <p>Whether you and your dog are planning a visit to Aunt Alice’s just up the turnpike or you want to see the Grand Canyon on a cross-country road trip, here are a few things to remember to pack for your trip:</p>
                            <span className="more"  rel="noopener noreferrer" target="_blank" href="https://www.google.com/">READ MORE <i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                    </div>
                    </div>
                </div><hr />
                <div className="pagination-container articles-pagination">
                    <div className="pagination-summary hidden-xs hidden-sm">
                        1-3 of 44 Articles
                    </div>
                <div className="pedigree-pagination">
                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="view-all hidden-xs hidden-sm">View All</a>

                        <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank" className="prev arrow">◀</a>
                            <a  href="https://www.google.com/"  rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible"><strong>1</strong></a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">2</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">3</a>
                            <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">4</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">5</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">6</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">7</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">8</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">9</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank"  className="desktopPageLinks visible">10</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">11</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">12</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">13</a>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">14</a>
                            <a href="/https://www.google.com/" rel="noopener noreferrer" target="_blank" className="desktopPageLinks visible">15</a>
                    <span className="mobilePageLinks">
                        1 / 15
                    </span>
                        <a className="arrow" rel="noopener noreferrer" target="_blank" href="https://www.google.com/">▶</a>
                </div>

                </div>


                </div>
              </div>
            </div>           
			
        </>
    );
    }
}
export default Paginations