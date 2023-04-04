import { useState } from "react";
import "./ProfileMenu.css";
import { useDispatch } from "react-redux";
import { logoutRedux } from "../../app/authSlice";
import { googleLogout } from '@react-oauth/google';

function ProfileMenu(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const dispacth = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function logout(){
    dispacth(logoutRedux());
    googleLogout();

  }

  return (
    <div className="ProfileMenu">
      <div className="ProfileMenu__trigger" onClick={toggleMenu}>
        Profile
      </div>
      {showMenu && (
        <div className="ProfileMenu__dropdown">
          <ul>
            <li>Settings</li>
            <li>Account</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
