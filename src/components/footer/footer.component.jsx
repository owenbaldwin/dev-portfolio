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
          <p>Linkedin</p>
          <p>GitHub</p>
        </div>
      </div>
      <div className='footer-shadow'/>
    </div>
  );
};

export default Footer;
