import  {useState } from 'react';
import './SideBox.css';

function SideBox({children}) {
  const [menuToggle, setMenuToggle] = useState(true);

  const shuffleMenu = () => {
    setMenuToggle(prevState => !prevState);
  }

  return (
    <div className={`sidebox ${menuToggle? 'close':''}`}>
      <div className='toggle' onClick={()=>shuffleMenu()}>
        <div className=''></div>
        <div className=''></div>
      </div>

      {children}
    </div>
  )
}

export default SideBox
