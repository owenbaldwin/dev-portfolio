import PageTitle from '../../components/page-title/page-title.component';
import ABOUT_DATA from '../../about-data';

import './about.styles.scss';

console.log(ABOUT_DATA);

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <PageTitle title="About"/>
        <div className='about-text'>
          {ABOUT_DATA.map((object) => {
            if (object.text) {
              return <p key={object.id}>{object.text}</p>
            }
          })}
        </div>
        <div className='about-links'>
          {ABOUT_DATA.map((object) => {
            if (object.link) {
              return <a href={object.link} target="_blank" key={object.id}>{object.title}</a>
            }
          })}
        </div>
      </div>
    </div>
  )
};


export default About;
