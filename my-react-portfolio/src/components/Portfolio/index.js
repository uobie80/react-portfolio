import React from 'react';
import Project from '../Project/index';
import wd from '../../images/weather-dashboard.png';
import verpur from '../../images/verpur.png';
import pwdGenerator from '../../images/password-generator.png';
import textEditor from '../../images/text-editor.png';
import visualLearningTool from '../../images/visual_learning.png';
import NoteTaker from '../../images/note-taker.png';

const projects = [
  {
    title: 'Password Generator',
    description: 'Site that generates a random password.',
    imageURL: pwdGenerator,
    siteURL: 'https://uobie80.github.io/PasswordGenerator/'
  },
  {
    title: 'Visual Learning Tool',
    description: 'Learn new words for the visual learner',
    imageURL: visualLearningTool,
    siteURL: 'https://uobie80.github.io/visual-learning-tool/'
  },
  {
    title: 'Text Editor',
    description: 'Installable text editor.',
    imageURL: textEditor,
    siteURL: 'https://uchenna-text-editor.herokuapp.com/'
  },
 {
    title: 'Weather Dashboard',
    description: 'Get the latest weather in your area.',
    imageURL: wd,
    siteURL: 'https://uobie80.github.io/weather-dashboard'
  },
  {
    title: 'Note Taker App',
    description: 'Note taking app as a daily planner.',
    imageURL: NoteTaker,
    siteURL: 'https://my-note-app.herokuapp.com/'
  },
  {
    title: 'Verpur Online Store',
    description: 'Need an affordable laptop then visit this site.',
    imageURL: verpur,
    siteURL: 'https://verpur.herokuapp.com/'
  }

]

export default function Portfolio() {
  return (
 
      <main class="container" role="main">
      <div class="container-fluid jumbotron jumbotron-portfolio py-5">
        <div class="container">
          <h1 class="display-3 fw-bold text-white">Portfolio</h1>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-3 row-cols-md-4 g-4">
      {projects.map(project => (
        <Project
          key={project.siteURL}
          title={project.title}
          description={project.description}
          imageURL={project.imageURL}
          siteURL={project.siteURL}
        />
      ))}
        </div>
      </div>
    </main>
  );
}