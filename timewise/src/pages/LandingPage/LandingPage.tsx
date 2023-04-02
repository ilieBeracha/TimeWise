import "./LandingPage.css";
import logo from "../../assets/images/logo.png";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";

function LandingPage(): JSX.Element {
    return (
        <div className="LandingPage">
            <div className="LandingPageBackground"></div>
            <div className="LandingPageHeader">
                <div className="LandingPageHeaderLogo">
                    {/* <img src={logo} alt="" /> */}
                </div>

                <div className="LandingPageHeaderLinks">
                    <a href="#LandingPageWelcome">Welcome</a>
                    <a href="#LandingPageAboutUs">About us</a>
                    <a href="#LandingPageWebsites">Supported Websites</a>
                    <Register />
                    <Login />
                </div>
            </div>


            <div id="LandingPageWelcome" className="LandingPageWelcome">
                <h1>Welcome to <span>TimeWise</span> </h1>
                
                <p>Stay on top of your social life and never miss a message again with our all-in-one tracking platform.</p>
                <button className="button-51">Start for free</button>
            </div>





            <div id="LandingPageAboutUs" className="LandingPageAboutUs">
                <div className="LandingPageAboutUsHeader">
                    <h1>About us</h1>
                    <div className="Marker"></div>
                </div>
                <div className="LandingPageAboutUsFeatures">
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">
                            <NotificationsActiveIcon fontSize="large" />
                            <h3>Smart Notifications</h3>
                        </div>
                        <div className="LandingPageAboutUsFeatureContent">
                            <span> Our platform uses advanced algorithms to intelligently prioritize and categorize your notifications, so you can quickly see the most important messages without getting bogged down by irrelevant alerts.</span>
                        </div>
                    </div>
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">
                            <AppRegistrationIcon fontSize="large" />
                            <h3>Cross-Platform Integration</h3>
                        </div>
                        <div className="LandingPageAboutUsFeatureContent">
                            <span>TimeWise seamlessly integrates with all the major social media and messaging apps, so you can manage all your communication in one place, no matter what platform your friends and colleagues are using.</span>
                        </div>
                    </div>
                    <div className="LandingPageAboutUsFeature">
                        <div className="LandingPageAboutUsFeatureHeader">
                            <AnalyticsIcon fontSize="large" />
                            <h3>Personalized Analytics</h3>
                        </div>
                        <div className="LandingPageAboutUsFeatureContent">
                            <span>Get deep insights into your social media activity and behavior, including how much time you spend on each app, which contacts you interact with the most, and what types of messages you send and receive the most frequently. Use this data to optimize your social media usage and improve your digital well-being.</span>
                        </div>
                    </div>
                </div>

            </div>


            <div id="LandingPageWebsites" className="LandingPageWebsites">
                <div className="LandingPageWebsitesHeader">
                    <h1>Supported Websites</h1>
                    <div className="Marker"></div>
                </div>

            </div>

        </div>
    );
}

export default LandingPage;
