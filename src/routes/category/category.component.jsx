import PORTFOLIO_DATA from '../../portfolio-data.js'
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import './category.styles.scss'



const Category = () => {
  const { category } = useParams();
  const [content, setContent] = useState(PORTFOLIO_DATA[category]);

  console.log('hello');
  console.log(PORTFOLIO_DATA);
  console.log('hello');

  return (
    <div className='category-container'>
      {PORTFOLIO_DATA.map((object) => {
        if (object.title === category) {
          return (
            // div with website's object id as key
            <div key={object.id}>
              <div className='category-title' key={object.title.id}>
                <h1>{object.title}</h1>
              </div>

              {/*div with item's object id as key*/}
              <div className='category-description' key={object.items[0].id}>
                <h5>Description</h5>
                <p>{object.items[0].presentation}</p>
              </div>

              <div className='category-links' key={object.items[1].id}>
                <p>{object.items[1].wblink}</p>
                <p>{object.items[2].ghlink}</p>
              </div>

              <div className='category-photo-container'>
                {/*iteration through 'images' to display images and image descriptions*/}
                {object.items[3].images.map((imageObject) => {
                  return (
                    <div className='category-photo' key={imageObject.id}>
                      <img src={imageObject.imageUrl} alt="portfolio images" border="0" />
                      <p>{imageObject.imageDescription}</p>
                    </div>
                  )
                })}
              </div>

            </div>
          )
        }
      })}


    </div>
  )
};

export default Category;
