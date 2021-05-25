import styles from "./MainPage.css";
import {Link} from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="shell">
      <div className="mainSplash">
        <h1 className="text">Find Your Inspiration.</h1>
        <h4 className='jokeTag' >Join the Flickr Clone community.</h4>
        <Link to='/signUp'><button className='midPageSignUpBtn' >Sign Up For Free</button></Link>
      </div>
    </div>
  );
}
