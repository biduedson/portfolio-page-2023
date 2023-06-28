import emailjs from 'emailjs-com'
import { contactMe } from '../../data/data'
import './contact.css'
import { useRef } from 'react'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kw18ye7', 'service_kw18ye7', form.current, 'cCD6VTISoI7JHlrQ8')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container ">
                <div className="contact__options">
                    {
                        contactMe.map(({ id, icon, type, name, link }) => {
                            return (
                                <article className='contact__option' key={id}>
                                    <div className='contact__option-icon'>{icon}</div>
                                    <h4>{type}</h4>
                                    <h5>{name}</h5>
                                    <a href={link} target='blank'> Send A message</a>
                                </article>
                            )
                        })
                    }
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Seu Nome' />
                    <input type="email" name='email' placeholder='Seu E-mail' required />
                    <textarea name="message" rows="7" placeholder='Sua Menssagen' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
