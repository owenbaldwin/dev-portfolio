import { Outlet, Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className='navbar-container'>
        <div className='navbar-inner'>
          <Link to='/' className='nav-left'>
            <h1>Owen</h1>
            <h1>Baldwin</h1>
          </Link>
          <div className='nav-right'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
};

export default Navigation;
