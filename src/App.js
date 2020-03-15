import React, { useState } from 'react';
import Header from './components/header/Header';
import './App.scss';
import Content from './components/content/Content';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Landing from './components/landing/Landing';


const App = () => {
  const [page, setPage] = useState(0);
  const changePage = (i) => setPage(i);
  const pages = [
    { name: '', component: <Landing /> },
    { name: 'About', component: <About />},
    { name: 'Projects', component: <Projects /> },
    { name: 'Resume', component: 'resume goes here' },
    { name: 'Contact', component: 'contact goes here' },
  ]

  return (
    <div className="app">
      <Header setPage={changePage} pages={pages} />
      <Content page={pages[page]} />
      <Footer />
    </div>
  );
}

export default App;
