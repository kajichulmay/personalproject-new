import React from 'react';
import { NavLink } from 'react-router-dom';

function TextTitle() {
  return (
    <div className="textTitle">
      <NavLink to="/login" className="textLink">
        Login
      </NavLink>
      <div className="textNextLink">
        <span>or</span>
        <NavLink to="/register" className="textLink">
          register
        </NavLink>
      </div>
    </div>
  );
}

export default TextTitle;
