import { BsPatchCheckFill } from 'react-icons/bs'
import { frontEndSkills, backEndSkills } from '../../data/data'
import './experience.css'
function Experience() {

    return (
        <section id='experience'>
            <h5>what Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container '>
                <div className="experience__frontend">
                    <h3>Frontent Devolopment</h3>
                    <div className="experience__content">
                        {
                            frontEndSkills.map((skill) => {
                                return (
                                    <article className='experience__details' key={skill.id}>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{skill.language}</h4>
                                            <small className='text-light'>{skill.experience}</small>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Devolopment</h3>
                    <div className="experience__content">
                        {
                            backEndSkills.map((skill) => {
                                return (
                                    <article className='experience__details' key={skill.id}>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{skill.language}</h4>
                                            <small className='text-light'>{skill.experience}</small>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
