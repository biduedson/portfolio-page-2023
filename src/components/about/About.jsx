import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers />
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
