import React from 'react';
import { NavLink } from 'react-router-dom';

function SeemoreContainer() {
  return (
    <div className="SeemoreContaniner">
      <h1>
        <NavLink className="linkSeemore" to="/all-series">
          See More ....
        </NavLink>
      </h1>
    </div>
  );
}

export default SeemoreContainer;
