import React, {useState} from "react";
import { Link } from "react-router-dom";
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
        <Link className="links" to="/login">
          Log In &nbsp;
        </Link>
        <Link className="links" to="/signup">
          Sign Up
        </Link>
      </>
    );
  }
  const handleClick=()=>{
    return null;
  }

  return (
    <ul className="navBar">
      <li className="navContainer">
        <Link className="links" exact to="/">
          Flickr Clone &nbsp;
        </Link>
        <span className='search'>
          <input
            type="text"
            name="searchContent"
            className="searchInput"
            placeholder="Search Keyword..."
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
          />
          <button
            type="button"
            className='searchSubmit'
            disabled={searchContent === ""}
            onClick={handleClick}
          >
            🔍{" "}
          </button>
        </span>

        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
