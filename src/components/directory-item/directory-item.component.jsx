import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
  const { imageUrl, title, route } = category;
  return (
    <div>
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
