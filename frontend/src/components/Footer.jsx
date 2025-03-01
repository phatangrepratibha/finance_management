import React from 'react';

const Footer = () => {
  return (
    <div   className='footer'
    
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
     
    </div>
  );
};

export default Footer;