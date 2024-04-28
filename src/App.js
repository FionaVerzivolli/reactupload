import './index.css';
import TextBody from "./components/TextBody";
import Skill from "./components/SkillCarousel";
import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';
import ImageSlider from "./components/Slider";

function App() {
  const images = [ "1.png", 
  "2.png", 
  "3.png", 
  "4.png", 
  "5.png", 
  "6.png", 
  "7.png",
  "8.png", 
  "9.png" 
  ]

  return (
    <main>
      <nav className="font-mono bg-teal-500 text-white fixed w-full flex justify-between items-center py-5 px-5">
        <h1 className="text-xl">Menu</h1>
        <div className="flex space-x-5 text-s">
          <ul className="flex space-x-20 text-gray text-xl cursor-pointer antialiased">
            <li><a href="#a">Home</a></li>
            <li><a href="#d">Skills</a></li>
            <li><a href="#b">Experience</a></li>
            <li><a href="#c">Projects</a></li>
            <li><a href="#e">Contact Me</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-screen-lg mx-auto ">
        <div className="App font-mono mx-20 min-w-8 max-w-25">
          <h1 id="a" className="text-teal-950 object-center text-7xl mb-1 ">blaceholder</h1>
          <h1 className=" text-teal-950 object-center text-9xl my-10 ">Hi, I'm Fiona.</h1>
          <h2 className=" text-5xl my-10 text-teal-950">
            <span className="underline-teal-300">Welcome to my website.</span>
          </h2>
          <p className="text-3xl font-bold">About me</p>
          <p className="mt-5 ml-5">Hi! My name is Fiona, and I'm a software developer. Additionally, I'm a student at the University of Toronto studying computer science. I am interested in all things computer science - web development (this website haha, I made it using React and Tailwind), cybersecurity, and AI/Machine Learning.</p>
          <div id="d" className="rounded-xl bg-teal-300 my-10 p-4">
            <TypeAnimation 
              sequence={[
                'I am passionate about web development',
                1000,
                'I am passionate about software development',
                1000,
                'I am passionate about cybersecurity',
                1000,
                'I am passionate about game development',
                1000,
                'I am passionate about ML/AI',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
      
          <div className="flex rounded-xl my-10 p-4">
            <div className="flex-1">
              <h1 className="text-4xl mb-6 ">Skills</h1>
              <Skill header="Languages" text="HTML5" text2="CSS" text3="Python" text4="Javascript" text5="C/C++" />
              <Skill header="Frameworks" text="React" text2="Tailwind" text3="Pytorch" text4="Tensorflow" text5="Typescript" />
              <Skill header="Soft Skills" text="Team-player" text2="Adaptive" text3="Strategy" text4="Communication" />
            </div>
          </div>
          <div id="b" className="mx-auto rounded-xl bg-teal-300 my-10 p-4">
              <h1 className="text-teal-950 text-5xl"> Experience</h1>
            </div>
            <TextBody image="uoftwebdev.png" position="Web Developer" company_name="UofT Web Dev" date="Dec 2023 - Present" text="As a Web Developer at UofT, I specialize in Node.js, MongoDB, and React.js for comprehensive web development. My role involves crafting dynamic and responsive applications, collaborating with cross-functional teams, and optimizing features for scalability. With expertise in server-side development, efficient data storage, and interactive user interfaces, I contribute to enhancing UofT's web presence and staying on top of industry trends." skills="Skills: Node.js · MongoDB · React.js · Web Development"/>
            <TextBody image="cssu.png" position="Careers Council Member" company_name="UofT CSSU" date="Oct 2023 - Present" text="As a Careers Council Member at the University of Toronto, my primary responsibility is to organize events in collaboration with sponsors. I play a key role in facilitating connections between students and potential employers by coordinating career-focused events and activities. Through strategic planning and effective communication with sponsors, I contribute to the success of these events, providing valuable networking opportunities for students and fostering meaningful partnerships for the university's career development initiatives." skills="Skills: Project Planning · Project Management · Teamwork"/>
            <TextBody image="google.png" position="Foundations of Cybersecurity" company_name="Google Certificate" date="Issued Dec 2023" text="Certificate issued to those who completed and passed the Intro to Cybersecurity course" skills="Skills: Cyber Defense · cybersecurity frameworks · Cybersecurity Tools" />
            <TextBody image="freecodecamp.png" position="Javascript Algorithms & Data Structures" company_name="FreeCodeCamp Certificate" date="Issued Oct 2023" text="Certificate issued to those who completed and passed the Data Structures and Algorithms projects" skills="Skills: Problem Solving · JavaScript · Algorithms · Data Structures"/>
            <div className="mx-auto rounded-xl bg-teal-300 my-10 p-4"/>

      <div className="" id="c"> 
      <p className="text-8xl mb-10 mt-10 font-mono text-center">Navigate to see my projects.</p>
        <ImageSlider images={images} />

      </div>
      <div className="mx-auto rounded-xl bg-teal-300 my-10 p-4"/>

      <h2 id="e" className="text-4xl text-center mb-5">Contact Information</h2>
      <div className=" text-center">
        <a href="https://www.linkedin.com/in/fiona-verzivolli" target="_blank">Click this for my LinkedIn!</a>
        <p></p>
        <a href="https://github.com/FionaVerzivolli" target="_blank">Click this for my GitHub!</a>
        <p>Email me at fiona.verzivolli@gmail.com</p>
        <div className="mx-auto rounded-xl bg-teal-300 my-10 p-4"/>
      </div>
      </div>
      </div>
    </main>
  );
}

export default App;
