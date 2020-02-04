import React, { useEffect } from 'react';
import bgHeader from './assets/img/work-desk__dustin-lee.jpg';
import logo from './assets/img/y-logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPaintBrush, faCubes, faBullhorn, faChartLine, faTasks, faTimes } from '@fortawesome/free-solid-svg-icons'
import './assets/App.css';


// var x = document.getElementById('btn-notif');
// x.addEventListener('click',hideNotif())

function App() {

  function hideNotif() {
    document.getElementById("notif").classList.add("hide")
  }

  useEffect(() => {
    window.addEventListener('scroll', removeNewsletter)
  });
  
  // eslint-disable-next-line no-unused-vars
  function removeNewsletter() {
    if (window.pageYOffset >= 3) {
      const elem = document.getElementById('newsletter');
      elem.style.display = 'block'
    }
  }

  return (
    <div className="container">
      <div id="notif" className="row justify-content notification-fixed">
        <div className="notification">
          <div className="flex">
            <div className="grow">
              <p>
                By accessing and using this website, you acknowledge that you have read and understand our {" "}
                <a
                  className="blank"
                  href="http://cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy, Privacy Policy,
                </a>
                {" "} and our {" "}
                <a
                  className="blank"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer">
                  Terms of Service.
                </a>
              </p>
            </div>
            <div className="col-12 align-self">
              <button id="btn-notif" className="btn-blue" onClick={hideNotif}>
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="header-background">
          <div className="bg-blue" />
        </div>
        <img src={bgHeader} className="img-background" alt="logo" />
        <img src={logo} className="img-logo" alt="logo" />
        <div className="page-header">
          <h1 className="m-0">
            Hello! I'm Meru
          </h1>
          <h2 className="m-0">
            Consult, Design, and Develop Websites
          </h2>
          <p> 
            Have something great in mind? Feel free to contact me.
          </p>
          <p>
            I'll help you to make it happen.
          </p>
          <button className="btn-header">Let's Make Contact</button>
        </div>
      </header>
      <main className="bg-main">
        <div className="row justify-content">
          <div className="col-auto p-35">
            <h2>How Can I Help You?</h2>
            <span>
              Our work then targeted, best practices outcomes social innovation synergy.
            </span>
            <span>Venture philanthropy, revolutionary inclusive policymaker relief. User-centered</span>
            <span>program areas scale.</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Consult</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faComments} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Co-create, design thinking; strengthen infrastructure resist granular.
                Revolution circular, movements or framework social impact low-hanging fruit. 
                Save the world compelling revolutionary progress.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Design</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faPaintBrush} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Policymaker collaborates collective impact humanitarian shared value
                vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                issue outcomes vibrant boots on the ground sustainable.</p>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Develop</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faCubes} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Revolutionary circular, movements a or impact framework social impact low-
                hanging. Save the compelling revolutionary inspire progress. Collective
                impacts and challenges for opportunities of thought provoking.
              </p>
              </div> 
          </div>
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Marketing</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faBullhorn} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                replicable, effective altruism youth. Mobilize commitment to overcome
                injustice resilient, uplift social transparent effective.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Manage</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faTasks} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Change-makers innovation or shared unit of analysis. Overcome injustice
                outcomes strategize vibrant boots on the ground sustainable. Optimism,
                effective altruism invest optimism corporate social.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h2>Evolve</h2>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faChartLine} style={{ color: 'grey' }}/>
                </div>
              </div>
              <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis
                overcome injustice storytelling altruism. Thought leadership mass 
                incarceration. Outcomes big data, fairness, social game-changer.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-footer">
        <span style={{ fontWeight: 400, color: 'white' }}> &#9400; 2018 Meru. All rights reserved.</span>
      </footer>
      <div id="newsletter" className="row newsletter-fixed-bottom" style={{ display: 'none' }}>
        <div className="col-auto">
          <div className="newsletter">
            <div className="grow">
              <div className="row justify-content-between">
                <div className="col-12">
                  <div className="title-newsletter">
                    Get latest updates in web technologies
                  </div>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'white' }}/>
                </div>
              </div>
              <p>
                I write articles related to web technologies, such as design trends, development
                tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                them all.
              </p>
            </div>
            <div className="row justify-content-between">
              <div className="col-auto p-10">
                <input className="input-email" placeholder="Email address" />
              </div>
              <div className="col-auto p-10">
                <button className="btn-orange">
                  Count me in!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
