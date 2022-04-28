import PORTFOLIO_DATA from '../../portfolio-data.js'
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import './category.styles.scss'

// capitalize category titles without screwing up urls

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
            <div className='category-content' key={object.id}>
              <div className='category-title' key={object.title.id}>
                <div className="separator" />
                <h1>{object.title}</h1>
                <div className="separator" />
              </div>

              {/*div with item's object id as key*/}
              <div className='category-description' key={object.items[0].id}>
                <h5>DESCRIPTION</h5>
                <p>{object.items[0].presentation}</p>
              </div>

              <div className='category-description' key={object.items[1].id}>
                <h5>TECHNOLOGIES USED</h5>
                <p>{object.items[1].tech}</p>
              </div>

              <div className='category-links' key={object.items[2].id}>
                <a href={object.items[2].wblink} target="_blank">Visit {object.title}</a>
                <a href={object.items[3].ghlink} target="_blank">GitHub Repo</a>
              </div>

              <div className='category-photo-container'>
                {/*iteration through 'images' to display images and image descriptions*/}
                {object.items[4].images.map((imageObject) => {
                  return (
                    <div className='category-photo-div' key={imageObject.id}>
                    {/*create new component for each photo to reuse same code as directory item?*/}
                      <img className='category-photo' src={imageObject.imageUrl} alt="portfolio images" border="0" />
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
