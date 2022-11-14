import React from 'react';
import './Footer.css';

function Footer() {
   const currentYear = (new Date()).getFullYear();

   return (
      <footer>
         <span>made with <span>&#9825;</span> by <span style={{color:'grey'}}>Castle_Inc</span> {currentYear}</span>
      </footer>
   )
}

export default Footer