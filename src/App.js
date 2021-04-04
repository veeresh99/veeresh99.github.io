import logo from './logo.svg';
import './App.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import profile  from './profile.jpg';

function App() {
  const renderTooltipHS = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      January 2021 - Present
    </Tooltip>
  );

  const renderTooltipAS = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      May 2020 - December 2020
    </Tooltip>
  );

  const renderTooltipAD = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      January 2020 - May 2020
    </Tooltip>
  );

  const renderTooltipS = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      June 2020 - August 2020
    </Tooltip>
  );

  const renderTooltipN = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      September 2019 - August 2020
    </Tooltip>
  );

  const renderTooltipE = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      May 2019 - August 2019
    </Tooltip>
  );

  return (
    <body>
      <div id="initialBody">
      <div class="profile_pic">
          <img src={profile} class="circular--square"/>
      </div>
       
        {/* <div class="col-4 text-center .d-none .d-xl-block" id="sidebar">
          About
          <br/>
          Blog
          <br/>
          The Misinformation Project
          <br/>
          Running
        </div> */}
        
            
              <h1 id="title">
                  Hey there, I'm Veeresh!
              </h1>
              <p id="description">
              I am a Software Engineer and aspiring Entrepreneur from San Jose, CA.
              <br/>
              I love to <a id="strava" href="https://www.strava.com/athletes/49322987" target="_blank">run</a>, 
              <a href="https://veeresh2.medium.com/" id="blog" target="_blank"> blog</a>, and film/produce videos for my  
              <a href="https://www.youtube.com/channel/UC242767TSTfsqGqijMxPZTw?view_as=subscriber" id="YT" target="_blank"> YouTube channel</a>.
              <br/> <br/>
              Best way to connect? <a href="https://veeresh2.medium.com/" id="blog" target="_blank"> Twitter! </a>
              <br/><br/>
              A brief overview of my experiences so far:
              <br/> <br/>
              <ul>
              <OverlayTrigger
                placement="left"
                delay={{ show: 50, hide: 100 }}
                overlay={renderTooltipHS}
              >
                <li>Software Developer Co-Op @ HubSpot</li>
              </OverlayTrigger>
                <li>AbbVie</li>
                <dl>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 100 }}
                    overlay={renderTooltipAS}
                  >
                  <li>Software Developer Intern</li>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 100 }}
                    overlay={renderTooltipAD}
                  >
                  <dd>DevOps Engineer Intern</dd>
                  </OverlayTrigger>
                </dl>
                <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 100 }}
                    overlay={renderTooltipS}
                >
                <li>Product Manager Intern @ SAP</li>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 100 }}
                    overlay={renderTooltipN}
                >
                <li>President/Co-Founder of NeuroTech @ UIUC</li>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="left"
                    delay={{ show: 50, hide: 100 }}
                    overlay={renderTooltipE}
                >
                <li>Data Analyst Intern @ Empinfo</li>
                </OverlayTrigger>
              </ul>
              </p>
          
      </div>
    </body>
  );
}

export default App;
