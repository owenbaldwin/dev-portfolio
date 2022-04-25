import { Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className='navbar-container'>
        <div className='navbar-inner'>
          <div className='nav-left'>
            <h1>Owen</h1>
            <h1>Baldwin</h1>
          </div>
          <div className='nav-right'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
};

export default Navigation;
