import React from 'react';
import classes from './Nav.css';
import Logo from '../../media/logo_light.svg'
import { Link } from 'react-router-dom';

export default function Nav() {
  console.log(classes);
  return (
    <nav>
      <div className={"max-wide" + classes.bg_gray}>
        <Link to='/'>
          <img src={Logo} alt="Logo Maynooth" />
        </Link>
        <div>
          <div>
            <Link to="/category/livingroom">Living Room</Link>
            <Link to="/category/livingroom">Living Room</Link>
            <Link to="/category/livingroom">Living Room</Link>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
