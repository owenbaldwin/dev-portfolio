import PageTitle from '../../components/page-title/page-title.component';
import CONTACT_DATA from '../../contact-data';
import './contact.styles.scss';


console.log(CONTACT_DATA);

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <PageTitle title='Contact'/>
        <div className='contact-details'>

          <h5>{CONTACT_DATA[0].name}</h5>
          <p>{CONTACT_DATA[0].detail}</p>


          <a href={CONTACT_DATA[1].detail} target="_blank">{CONTACT_DATA[1].name}</a>

          <a href={CONTACT_DATA[2].detail} target="_blank">{CONTACT_DATA[2].name}</a>


        </div>
      </div>
    </div>
  );
};

export default Contact;
