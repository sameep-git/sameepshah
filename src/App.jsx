import { useState } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['TCU Student', 'Software Developer', 'Research Assistant', 'Leader'];

const App = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <Navbar/>
      <div class="intro">
        <h1 class="name">Sameep Shah</h1>
        <h3 class="name-desc md:flex-row">
          <span>Hi there, I am Sameep. I am a</span>
          <span class="desc-comp"><TextTransition springConfig={presets.wobbly} direction='down' className='md:pl-2'>{TEXTS[index % TEXTS.length]}</TextTransition></span>
        </h3>
        <div class="profile">
          <div class="aboutme basis-3/4">
            <span class="pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
          <p> I am a double major Computer Science and Economics student at TCU.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App