import React, { useState } from 'react';
import './About.scss';
import AboutList from './AboutList';
import AboutDetail from './AboutDetail';

const aboutItems = [
  {
    key: 0,
    title: 'Aaron',
    img: require('../../resources/me.jpeg'),
    desc: 'I am a full stack developer with experience ranging from embedded architecture to ui development'
  }, {
    key: 1,
    title: 'Cooking',
    img: require('../../resources/cooking.jpeg'),
    desc: 'I thoroughly enjoy cooking. I absolutely love food and will try just about anything'
  }, {
    key: 2,
    title: 'Life',
    img: require('../../resources/cooking.jpeg'),
    desc: 'I have a wonderful loving fiancè (whom I will be married to come October 2021)'
  }, {
    key: 7,
    title: 'Mechanical Keyboards',
    img: require('../../resources/keyboard_whitefox.jpeg'),
    desc: 'Have to respect the tools of the trade. There is nothing better then typing on a well constructed /dev/tty'
  }, {
    key: 3,
    title: 'Woodworking',
    img: require('../../resources/woodworking_speaker.jpg'),
    desc: 'I recently picked up woodworking as a hobby. I built a bluetooth speaker for myself and am currently working on building a set of shelves to neaten up my home office'
  }, {
    key: 4,
    title: 'Whiskey, Wine and Craft Beer',
    img: '',
    desc: 'I am not a huge drinker but when I do I prefer to enjoy a good craft beer, whiskey, wine'
  }, {
    key: 5,
    title: 'Pets',
    img: require('../../resources/pets_cats.jpg'),
    desc: 'I have a house full of animals (myself included). Two cats, Vanilla & Crash; one dog, Jace, and a betta fish who is lacking a name'
  }, {
    key: 6,
    title: 'This Site',
    img: require('../../resources/site.png'),
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
        <AboutDetail detail={aboutItems.find(item => item.key === selected)} />
      </div>
    </div>
  );
}

export default About;
