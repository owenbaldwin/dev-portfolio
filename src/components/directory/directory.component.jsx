import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
    {
      id: 1,
      title: 'FilmPod',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: '/filmpod'
    },
    {
      id: 2,
      title: 'Copson Studio Wiring',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: '/copsonstudiowiring'
    },
    {
      id: 3,
      title: 'Owen Baldwin - Film Composer',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: '/owen-baldwin'
    },
    {
      id: 4,
      title: 'Watchlist',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: '/watchlist'
    },
    {
      id: 5,
      title: 'Demo React Shop',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'demo-react-shop'
    },
    {
      id: 6,
      title: 'IsleBnB',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: '/islebnb'
    },
  ];


const Directory = () => {
  return (
    <div>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );

};

export default Directory;
