import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <body>
      <div className="main_container">
        <p className="welcome_text">welcome! i'm <a href="https://www.linkedin.com/in/veeresh-neralagi/" target="_blank">veeresh</a> and here's what i've been up to.</p>
      </div>
      <Container className="sub-container">
        <Row>
          <div className="title-div">
            <h2>Projects</h2>
          </div>
          <div className="card card-1">
            <p className="title"><a href="https://shoestack.vercel.app/" target="_blank" className="a-div">Shoestack</a></p>
            <p className="description">Building a platform that helps runners efficiently find their next pair of running shoes.</p>
          </div>
          <div className="card card-2">
            <p className="title"><a href="https://intro-website-dev.vercel.app/" target="_blank" className="a-div">Intro to WebDev</a></p>
            <p className="description">Creating a 3 part lecture series on an introduction to website development! </p>
          </div>
        </Row>
        <Row>
          <div className="title-div">
            <h2>Writing</h2>
          </div>
          <div className="card card-3">
            <p className="title"><a href="https://the-transcendence.vercel.app/" target="_blank" className="a-div">The Transcendence</a></p>
            <p className="description"> Bringing the most authentic stories in the world of endurance sports and redefining what's possible. </p>
          </div>
          <div className="card card-5">
            <p className="title"><a href="https://veeresh2.medium.com/" target="_blank" className="a-div">Tech Blog</a></p>
            <p className="description"> I write about technology and interview notable people in various disciplines. </p>
          </div>
        </Row>
        <Row>
          <div className="title-div">
            <h2>Running</h2>
          </div>
          <div className="card card-6">
            <p className="title"><a href="https://www.baa.org/" target="_blank" className="a-div">Boston Marathon</a></p>
            <p className="description"> Excited to be training for my first Marathon major on April 18th in Boston!   </p>
          </div>
          <div className="card card-7">
            <p className="title"><a href="https://www.strava.com/athletes/49322987" target="_blank" className="a-div">Strava</a></p>
            <p className="description"> A fitness social-media platform where I document all my runs and races.  </p>
          </div>
        </Row>
      </Container>
    </body>
  );
}

export default App;
