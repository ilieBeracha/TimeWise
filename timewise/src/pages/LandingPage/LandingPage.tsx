import "./LandingPage.css";
import logo from "../../assets/images/mainLogo.png";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import background from '../../assets/images/background2.jpg'

import { useRef } from "react";

function LandingPage(): JSX.Element {
    const ref: any = useRef()


    function goto() {
        location.href = '#LandingPageAboutUs'
    }
    return (
        <div className="LandingPage">

            <div className="LandingPageBackground"></div>
            <div className="LandingPageHeader">
                <div className="LandingPageHeaderLogo">
                    <img src={logo} alt="" />
                </div>

                <div className="LandingPageHeaderLinks">
                    <a href="#LandingPageWelcome">Welcome</a>
                    <a href="#LandingPageAboutUs">About us</a>
                    <a href="#LandingPageWebsites">More</a>
                    <Register />
                    <Login />
                </div>
            </div>

            {/* 1 */}

            <div id="LandingPageWelcome" className="LandingPageWelcome">
                <h1>Welcome to <span>TimeWise</span> </h1>

                {/* <p>Personalized travel planning for unforgettable adventures.</p> */}
                <button onClick={goto} className="button-51">Learn more</button>
            </div>

            {/* 2 */}

            <div id="LandingPageAboutUs" className="LandingPageAboutUs">
                <div className="LandingPageAboutUsHeader">
                    <h1>About us</h1>
                    <div className="Marker"></div>
                </div>
                <div className="LandingPageAboutUsFeatures">
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">

                        </div>
                        <div className="LandingPageAboutUsFeatureContent">

                        </div>
                    </div>
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">

                        </div>
                        <div className="LandingPageAboutUsFeatureContent">

                        </div>
                    </div>
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">

                        </div>
                        <div className="LandingPageAboutUsFeatureContent">

                        </div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            
            <div id="LandingPageWebsites" className="LandingPageWebsites">
                <div className="LandingPageWebsitesHeader">
                    <h1>More</h1>
                    <div className="Marker"></div>
                </div>

                <div className="LandingPageWebsitesDiv">

                </div>

            </div>
        </div>
    );
}

export default LandingPage;
