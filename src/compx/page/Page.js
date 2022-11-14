import { useState } from 'react';
import './Page.css';

// 
import Headernav from './../headerNav/Headernav';
import SideBox from './../sideBox/SideBox';
import Footer from '../footer/Footer';

// 


function Page({pageComponent, pageClass}) {

   return (
      <div className={`page ${pageClass}`}>

         <SideBox>
            <Headernav/>
         </SideBox>

         <div className='pageContainer'>
            {pageComponent}
         </div>

         <Footer />
      </div>
   )
}

export default Page