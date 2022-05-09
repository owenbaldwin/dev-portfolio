import { Link } from 'react-router-dom';

import './hamburger.styles.scss';

const Hamburger = () => {
  return (
    <div className='navbar'>
      <input type="checkbox" class="menu-btn" id="menu-btn" />
      <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>
      <ul class="tabs">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
};

export default Hamburger;
