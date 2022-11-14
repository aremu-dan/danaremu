import { useState } from 'react';
import { Link } from 'react-router-dom';
// 
import './Homepage.css';

function Homepage() {
  const [socialdata] = useState([
    {
      'key': 'phone',
      'linkTo': 'https://www.instagram.com',
      'style': {
        backgroundImage: 'url(/media/icons/phone.svg)'
      }
    },
    {
      'key': 'facebook',
      'linkTo': '',
      'style': {
        backgroundImage: 'url(/media/icons/facebook.svg)'
      }
    },
    {
      'key': 'instagram',
      'linkTo': '',
      'style': {
        backgroundImage: 'url(/media/icons/instagram.svg)'
      }
    },
    {
      'key': 'whatsapp',
      'linkTo': '',
      'style': {
        backgroundImage: 'url(/media/icons/whatsapp.svg)'
      }
    },
    {
      'key': 'email',
      'linkTo': '',
      'style': {
        backgroundImage: 'url(/media/icons/email.svg)'
      }
    }
  ]);

  const userDP = {
    'backgroundImage': 'url(/media/user/user_temp.png)'
  };


  return (
    <div className='homepage'>
      <div className=''>
        <div className='profile-thumb' style={userDP}></div>
        <h2>Dan Aremu (Castle)</h2>
        <span>Full Stack Developer</span>
        <div className='social-icons'>
          {
            socialdata.map(item => {
              return (
                <Link 
                  key={item.key} 
                  to={{ pathname: item.linkTo }} 
                  className='item'
                  target="_blank" 
                  style={item.style}></Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Homepage