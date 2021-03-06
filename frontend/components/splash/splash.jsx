import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-structure">
      <div className="center-text">
        <h2>What do you love?</h2>
        <h4>Do more of it with ToGather</h4>
        <Link className="splash-signup" to={`/signup`}>Sign Up</Link>
      </div>
      <div>
        <ul className="splash-interests">
          <li><Link className="link-interest" to={`/find/hobbies`}>Fly a rocket</Link></li>
          <li><Link className="link-interest" to={`/find/outdoors`}>Shuttle up to Tahoe</Link></li>
          <li><Link className="link-interest" to={`/find/food`}>Join a pie eating contest</Link></li>
          <li><Link className="link-interest" to={`/find/dating`}>Find the mr/mrs</Link></li>
          <li><Link className="link-interest" to={`/find/pets`}>Wrestle pugs</Link></li>
          <li><Link className="link-interest" to={`/find/social`}>Watch spongebob</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Splash;
