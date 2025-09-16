import './About.css';
import githubLogo from '../assets/github.jpg';

function About() {
    return(
        <>
           <div className='about-page'>
                <div className='container'>
                    <div className='title'>
                        About
                    </div>
                    <div className='about-text'>
                        My name is Oliver Hughes and I am a student passionate in software and web app development.
                    </div>

                    <a href="https://github.com/Yeskonerism" class="github-link">
                        <img src={githubLogo} alt="GitHub" class="github-logo" className='logo'/>
                        <span>Github</span>
                    </a>
    
                    <div className='case-study'>
                        <h2>Case Study</h2>
                        The reason i have created this app is because my school's mobile app 
                        requires constant internet, isn't very intuitive and runs slow a majority of times.
                        
                        <br />
                        <br />
                        
                        <h3>[ Tools ]</h3>
                        I developed this app in ReactJS and Vanilla CSS as my second project working with React.
                    </div>
                </div>
                <div className="about">
                    <div className="author">
                        Created by Oliver Hughes.
                    </div>
                    <a href="https://github.com/Yeskonerism" className="github"> GitHub</a>
                </div>
            </div>
        </>
    )
}

export default About;