import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./Navigation.css";

function Navigation({ isLoaded }) {
  const [searchContent, setSearchContent] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In &nbsp;</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }
  const handleClick=()=>{
    return null;
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home &nbsp;
        </NavLink>
        <input
          type="text"
          name="searchContent"
          placeholder="Search Keyword..."
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <button
          type="button"
          disabled={searchContent === ""}
          onClick={handleClick}
        >🔍 </button>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
