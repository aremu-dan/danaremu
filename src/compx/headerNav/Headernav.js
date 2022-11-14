import { useState } from 'react';
import { Link } from 'react-router-dom';
// 
import './Headernav.css';

function Headernav() {
  const [headerNavigation] = useState([
    {
      linkTo: '/home',
      title: 'home'
    },
    {
      linkTo: '/about',
      title: 'about'
    },
    {
      linkTo: '/project',
      title: 'project'
    },
    {
      linkTo: '/contact',
      title: 'contact'
    }
  ]);

  return (
    <div className='headerNav'>
      {
        headerNavigation.map(item => {
          return(
            <Link 
              key={item.linkTo}
              to={item.linkTo} 
              className='item' 
              style={{backgroundImage: `url(/media/icons${item.linkTo}.svg`}} title={item.title}>
              {/* <span>{item.title}</span> */}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Headernav