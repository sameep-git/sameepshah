import { useState } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Extracurriculars from './components/Extracurriculars'
import TextTransition, { presets } from 'react-text-transition';
import profilephoto from './assets/profilephoto.jpg';
import Coursework from './components/Coursework'

const TEXTS = ['TCU Student', 'Software Developer', 'Research Assistant', 'Leader'];
const headers = ["Name", "Age", "City"];
const data = [
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Charlie", age: 35, city: "Chicago" },
];

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [coursework, setCoursework] = React.useState(null);

  React.useEffect(() => {
    fetch('/coursework.json')
      .then(response => response.json())
      .then(coursework => setCoursework(coursework))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <Navbar/>
      <div class="intro md:px-20 md:pt-20 md:pb-4">
        <h1 class="name">Sameep Shah</h1>
        <h3 class="name-desc md:flex-row">
          <span>Hi there, I am Sameep. I am a</span>
          <span class="desc-comp"><TextTransition springConfig={presets.wobbly} direction='down' className='md:pl-2'>{TEXTS[index % TEXTS.length]}</TextTransition></span>
        </h3>
        <div class="profile md:flex-row">
          <div class="aboutme basis-3/4">
            <div class="aboutbox">
              <span class="pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </span>
            <p> I am a double major Computer Science and Economics student at TCU. 
              I love building tools to optimize operations and solve critical problems. 
              My technical interests range from <strong>artificial intelligence</strong> to <strong>systems programming</strong> to <strong> data analysis</strong>. 
              My non-technical interests include watching hockey, listening to rock music, researching the economy and following esports.</p><br></br>
            </div>
            <div class="contactme md:flex-row">
              <strong>Contact Me:</strong>
                <div class="contactlist md:flex-row">
                  <a href='tel:+16823732206' class="contact">(682) 373-2206,</a>
                  <a href='mailto:sameepshah384@gmail.com' class="contact">sameepshah384@gmail.com,</a>
                  <a href='https://www.linkedin.com/in/sameepshah-/' target='_blank' class="contact">LinkedIn,</a>
                  <a href='https://github.com/sameep-git' target='_blank' class="contact">GitHub,</a>
                  <a href='https://tcu.box.com/s/7scs2d4zgiys3tgl0hd7nt9thsml4ymi' target='_blank' class='contact'>Resumé</a>
                </div>
            </div>
          </div>
          <div class="profilephoto basis-1/4 md:ml-3 lg:-mt-2">
            <img src={profilephoto} class="md:max-w-[175px]"></img>
          </div>
        </div>
      </div>
      <div class='workexp md:ml-16 md:mr-32'>
          <Work/>
          <hr></hr>
      </div>
      <div class='extracurr md:ml-16 md:mr-32'>
          <Extracurriculars/>
          <hr></hr>
      </div>
      <div class='courses'>
          <Coursework /> 
      </div>
    </div>
  )
}

export default App