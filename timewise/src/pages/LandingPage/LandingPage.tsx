import "./LandingPage.css";
import logo from "../../assets/images/mainLogo.png";
import image2 from "../../assets/images/logo.png";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import satellite from "../../assets/images/satellite.svg";
import earth from "../../assets/images/earth.svg";
import clients_main from "../../assets/images/clients-main.svg";

import { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

function LandingPage(): JSX.Element {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className="LandingPage">
      <div className="LandingPageBackground"></div>
      <div className="LandingPageHeader">
        <div className="LandingPageHeaderLogo">
          <img src={logo} alt="" />
        </div>

        <div className="LandingPageHeaderLinks">
          <Register />
          <Login />
        </div>
      </div>

      <Parallax pages={3} ref={parallax} style={{ top: 0, left: 0 }}>
        {/* 1 */}

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <div id="LandingPageWelcome" className="LandingPageWelcome">
            <h1>
              Welcome to <span>TimeWise</span>{" "}
            </h1>

            <p>Personalized travel planning for unforgettable adventures.</p>
            {/* <button onClick={goto} className="button-51">Learn more</button> */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} speed={0.8} style={{ opacity: 0.7 }}>
          <img
            src={earth}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={satellite}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        {/* 2 */}

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <div id="LandingPageAboutUs" className="LandingPageAboutUs">
            <div className="LandingPageAboutUsHeader">
              <h1>About us</h1>
              <div className="Marker"></div>
            </div>
            <div className="LandingPageAboutUsFeatures">
              <div className="LandingPageAboutUsFeature">
                <div className="LandingPageAboutUsFeatureHeader"></div>
                <div className="LandingPageAboutUsFeatureContent"></div>
              </div>
              <div className="LandingPageAboutUsFeature">
                <div className="LandingPageAboutUsFeatureHeader"></div>
                <div className="LandingPageAboutUsFeatureContent"></div>
              </div>
              <div className="LandingPageAboutUsFeature">
                <div className="LandingPageAboutUsFeatureHeader"></div>
                <div className="LandingPageAboutUsFeatureContent"></div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* 3 */}

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <div id="LandingPageWebsites" className="LandingPageWebsites">
            <div className="LandingPageWebsitesHeader">
              <h1>More</h1>
              <div className="Marker"></div>
            </div>

            <div className="LandingPageWebsitesDiv"></div>
            
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPage;
