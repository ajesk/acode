import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Landing from './components/landing/Landing';
import Resume from './components/resume/Resume';


const App = () => {
  const [page, setPage] = useState(0);
  const pages = [
    { id: 0, name: '', component: <Landing /> },
    { id: 1, name: 'About', component: <About /> },
    { id: 2, name: 'Projects', component: <Projects /> },
    { id: 3, name: 'Resume', component: <Resume /> },
    { id: 4, name: 'Contact', component: <Contact /> },
    // { id: 5, name: 'Media Consumed', component: <Media /> },
  ]


  return (
    <div className="app">
      <Header setPage={setPage} pages={pages} />
      <Content page={pages.find(pg => pg.id === page)} />
      <Footer />
    </div>
  );
}

export default App;
