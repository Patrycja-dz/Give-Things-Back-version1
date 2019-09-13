import React from "react";
import HomeSecondSection from "./HomeSecondSection";
//import HomeThreeColumns from "./HomeThreeColumns";
import OnlyFourSteps from "./OnlyFourSteps";
import AboutUs from "./AboutUs";
import WhomWeHelp from "./WhomWeHelp";
import Contact from "./Contact";
//import Footer from "./Footer";
import HomeNavigation from "./HomeNavigation";
class Home extends React.Component {
    render() {
        return(
            <div>
               <HomeSecondSection/>

               <OnlyFourSteps/>
               <AboutUs/>
               <WhomWeHelp/>
               <Contact/>

            </div>
        );
    }
}

export  default Home;
