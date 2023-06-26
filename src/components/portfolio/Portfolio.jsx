import './portfolio.css'
import { portfolio } from '../../data/data'
function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Rrecent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    portfolio.map((item) => {
                        return (
                            <article className='portfolio__item' key={item.id}>
                                <div className="portfolio__item-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <h3>This is a portfolio item title</h3>
                                <div className="portfolio__item-cta">
                                    <a href={item.github} className='btn'>Github</a>
                                    <a href={item.projectLink} className='btn btn-primary' target='blank'>Live Demo</a>
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
