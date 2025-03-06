import React from 'react';
import './App.css';
import moi from './assets/moi.jpg';
import aws from './assets/aws.png';
import python from './assets/python.png';
import js from './assets/js.png';
import react from './assets/react.png';
import reactNative from './assets/rn.png';
import book from './assets/book.png';
import track from './assets/track.jpg';
import money from './assets/money.jpg';
  
function App() {
  const skills = [aws, python, js, react, reactNative];

  return (
    <main>
      <div className="top">
        <div className="square"></div>
        <div className="round"></div>
        <h3>dimisiet@icloud.com</h3>
      </div>

      <section className="hero">
        <div className="hero-top">
          <h1>Hi, I'm</h1>
          <img src={moi} alt="Profile" />
          <h1>Nzeulie Dimitri!</h1>
        </div>
        <h1>
          <span>I'm a </span>
          <span className="active">freelance</span>
        </h1>
        <div id="second">
          <h1>
            <span className="active">developer.</span>
          </h1>
          <div className="text-border-box">
            <div className="outer-circle">
              <div className="center-circle"></div>
            </div>
            <h3>open to work</h3>
          </div>
        </div>
      </section>
      <section className='subHero'>
          <button 
            className="subHero-button" 
            onClick={() => window.open("https://github.com/NSDKING/", "_blank")}
          >
            My GitHub
          </button>

          <div className='subHero-text'>
            <h4>feel free to explore my portfolio and reach out</h4>
            <h4>--i'd love to connect!</h4>
          </div>
          
      </section>

      <h2>Tech Stack</h2>
      <section className='tech'>
        {
          skills.map((skill, index) => (
            <div className='tech_card' key={index}>
              <img src={skill} alt={`Skill ${index + 1}`} />
            </div>
          ))
        }
      </section>
      <h2>Projects</h2>
      <div className="projects">
        <div className="project-box">
            <img src={money} className="phone-image" alt="MoneyTrack" />

            <p className='phone-text'>
                <span> MoneyTrack </span> is a mobile app built with React Native to help users track their income and expenses. 
                It features <span>customizable categories, visual reports, and an intuitive interface</span> for better financial management.
            </p>
        </div>

        <div className="project-box">
            <img src={book} className="phone-image" alt="Book News" />

            <p className='phone-text'>
                <span> Book News </span> is a blog website built with React.js and AWS Amplify, allowing users to create and manage articles. 
                It includes <span>a dashboard for content management and image uploads via S3</span>.
            </p>
        </div>

        <div className="project-box">
            <img src={track} className="phone-image" alt="PAD Prologiciel" />

            <p className='phone-text'>
                <span> this  Prologiciel </span> is a web platform for ship management, enabling remote monitoring of ship statuses.  
                It provides <span>real-time data, reporting tools, and an efficient interface based on sensor</span> for port operations.
            </p>
        </div>

      </div>
    </main>
  );
}

export default App;
