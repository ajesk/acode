import React, { useState } from 'react';
import './About.scss';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import AboutList from './AboutList';
import AboutDetail from './AboutDetail';

const aboutItems = [
  {
    key: 0,
    title: 'Myself',
    images: [
      require('../../resources/me.jpeg')
    ],
    desc: 'I am a full stack developer with experience ranging from embedded architecture to ui development. ' +
      'I am currently trying to teach myself more about distributed systems and deployments to better teach myself about modern architectures.'
  }, {
    key: 1,
    title: 'Cooking',
    images: [
      require('../../resources/cooking.jpeg')
    ],
    desc: 'I thoroughly enjoy cooking. I absolutely love trying new foods and recipes; so if you have something interesting to try out, let me know'
  }, {
    key: 7,
    title: 'Mechanical Keyboards',
    images: [
      require('../../resources/keyboard_whitefox.jpeg'),
      require('../../resources/keyboards_building.jpg'),
      require('../../resources/keyboards_building_2.jpg'),
    ],
    desc: 'Have to respect the tools of the trade. There is nothing better then typing on a well constructed /dev/tty. I have actually built a number of keyboard kits over the past few years since I\'ve gotten into this hobby. It has been an exceptionally rewarding venture that has taught me quite a bit about soldering and micro controllers.'
  }, {
    key: 3,
    title: 'Woodworking',
    images: [
      require('../../resources/woodworking_speaker.jpg'),
      require('../../resources/woodworking_speaker_in_progress.jpg'),
      require('../../resources/woodworking_window.jpg'),
    ],
    desc: 'I recently picked up woodworking as a hobby. I built a bluetooth speaker for myself. Currently I am working on refinishing the stairs in my house.'
  }, {
    key: 5,
    title: 'Pets',
    images: [
      require('../../resources/pets_cats.jpg')
    ],
    desc: 'I have a house full of animals (myself included). Two cats, Vanilla & Crash; one dog, Jace, and a betta fish who is still lacking a name'
  }, {
    key: 6,
    title: 'This Site',
    images: [
      require('../../resources/site.png')
    ],
    desc: 'This site is build using create-react-app and not much else. Most layouts components and stylings are put together by me, with the exception of the transition effect.'
  }
];

const About = () => {
  const [selected, setSelected] = useState(0);

  console.log(selected)
  console.log(aboutItems.find(item => item.key === selected))

  return (
    <div className="about">
      <div className="about-left">
        <AboutList aboutItems={aboutItems} handleSelect={setSelected} selected={selected} />
      </div>
      <div className="about-right">
        <SwitchTransition mode="out-in">
          <CSSTransition
            timeout={500}
            classNames="about-detail"
            key={selected}
            in={selected}
          >
            <AboutDetail detail={aboutItems.find(item => item.key === selected)} />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default About;
