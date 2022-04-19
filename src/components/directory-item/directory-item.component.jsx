import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss'


const DirectoryItem = ({category}) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div onClick={onNavigateHandler} className="directory-item-container">
      <div>
        <h4>image goes here</h4>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  )
};

export default DirectoryItem;
