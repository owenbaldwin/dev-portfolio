import { Routes, Route } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
// import Portfolio from './routes/portfolio/portfolio.component';
import Category from './routes/category/category.component';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Category />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
