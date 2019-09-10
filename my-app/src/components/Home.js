import React from "react";
import HomeSecondSection from "./HomeSecondSection";
import HomeThreeColumns from "./HomeThreeColumns";
import OnlyFourSteps from "./OnlyFourSteps";
import AboutUs from "./AboutUs";
import WhomWehelp from "./WhomWehelp";
import Contact from "./Contact";
import Footer from "./Footer";
class Home extends React.Component {
    render() {
        return(
            <div>
               <HomeSecondSection/>
               <HomeThreeColumns/>
               <OnlyFourSteps/>
               <AboutUs/>
               <WhomWehelp/>
               <Contact/>
               <Footer/>
            </div>
        );
    }
}

export  default Home;
