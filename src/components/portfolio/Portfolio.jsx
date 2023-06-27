import './portfolio.css'
import { portfolio } from '../../data/data'
function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Rrecent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    portfolio.map(({ id, title, image, github, projectLink }) => {
                        return (
                            <article className='portfolio__item' key={id}>
                                <div className="portfolio__item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={projectLink} className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio
