import React from 'react';
import Address from './Address';
import BrandLogo from './BrandLogo';
import Social from './Social';
function Footer() {
  return (
    <div className="footer">
      <BrandLogo />
      <Address />
      <Social />
    </div>
  );
}

export default Footer;
