import PORTFOLIO_DATA from '../../portfolio-data.js'
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

const categories = [
    {
      id: 1,
      title: 'FilmPod',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'filmpod'
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

const Category = () => {
  const { category } = useParams();
  const [content, setContent] = useState(PORTFOLIO_DATA[category]);

  console.log('hello');
  console.log(PORTFOLIO_DATA);
  console.log('hello');

  return (
    <div>
      {PORTFOLIO_DATA.map((object) => {
        if (object.title === category) {
          return (
            // div with website's object id as key
            <div key={object.id}>
              {/*div with item's object id as key*/}
              <div key={object.items[0].id}>
                <h5>Description</h5>
                <p>{object.items[0].presentation}</p>
              </div>
              <div>
                <p>{object.items[1].extlink}</p>
                <img src={object.items[2].imageUrl} alt="filmpod-homepage" border="0" />
              </div>

            </div>
          )
        }
      })}


    </div>
  )
};

export default Category;


// go through json file and display only stuff under the right object title ie filmpod for filmpod only
