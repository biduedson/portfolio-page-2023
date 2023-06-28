import { socialsMediias } from '../../data/data'
import './footer.css'
function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>EGADesign</a>
            <ul className='permalinks'>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </ul>

            <div className="footer__socials">
                {
                    socialsMediias.map(({ id, icon, link }) => {
                        return (
                            <>
                                <a href={link} key={id}>{icon}</a>
                            </>
                        )
                    })
                }
            </div>
            <div className="footer__copyright">
                <small>&copy;EGADesign FullStack Developer. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
