import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss'


const DirectoryItem = ({category}) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div onClick={onNavigateHandler} className="directory-item-container">
      <div className='directory-item-bg-img' style={{backgroundImage: `url(${imageUrl})`}}>
        <div className='directory-item-cover'>
        </div>
      </div>
    </div>
  )
};

export default DirectoryItem;

// <h3>{title}</h3>
