import "./Header.css";
import logo from "../../assets/images/mainLogo.png";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div
        onClick={() => (location.href = "/")}
        className="LandingPageHeaderLogo"
      >
        {/* <img src={logo} alt="" /> */}
        <div className="logo">
            <span>TimeWise</span>{" "}
        </div>
      </div>

      <div className="HeaderProfileDiv">{/* <ProfileMenu /> */}</div>
    </div>
  );
}

export default Header;
