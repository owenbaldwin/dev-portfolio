import CONTACT_DATA from '../../contact-data';
import './footer.styles.scss';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-left'>
          <p>I'm a full stack developer.</p>
          <p>This portfolio website was built using React, check out the about page.</p>
        </div>
        <div className='footer-right'>
          <a href={CONTACT_DATA[1].detail} target="_blank">{CONTACT_DATA[1].name}</a>

          <a href={CONTACT_DATA[2].detail} target="_blank">{CONTACT_DATA[2].name}</a>
        </div>
      </div>
      <div className='footer-shadow'/>
    </div>
  );
};

export default Footer;
