import DirectoryItem from "../directory-item/directory-item.component";
import PageTitle from "../page-title/page-title.component";
import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: 'FilmPod',
      imageUrl: 'https://i.ibb.co/TbyrPqf/Screenshot-2021-12-08-at-14-51-58.png',
      route: '/FilmPod'
    },
    {
      id: 2,
      title: 'Copson Studio Wiring',
      imageUrl: 'https://i.ibb.co/3sCZJ58/csw-home.png',
      route: '/Copson Studio Wiring'
    },
    {
      id: 3,
      title: 'Owen Baldwin - Film Composer',
      imageUrl: 'https://i.ibb.co/r21z6cN/ob-home.png',
      route: '/Music Portfolio'
    },
    {
      id: 4,
      title: 'Watchlist',
      imageUrl: 'https://i.ibb.co/56s28Rr/wl-home.png',
      route: '/Watchlist'
    },
    {
      id: 5,
      title: 'Demo React Shop',
      imageUrl: 'https://i.ibb.co/4pVXb9H/crwn-home.png',
      route: 'Demo React Store'
    },
    {
      id: 6,
      title: 'IsleBnB',
      imageUrl: 'https://i.ibb.co/LnR5nsN/islebnb-landingpage.png',
      route: '/IsleBnB'
    },
  ];


const Directory = () => {
  return (
    <div className="directory-container">
      <div className="directory-content">
        <PageTitle title="Portfolio"/>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );

};

export default Directory;
