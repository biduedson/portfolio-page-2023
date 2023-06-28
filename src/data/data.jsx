



export const frontEndSkills = [
    {
        id: 1,
        language: "HTML",
        experience: "Avanced"
    },
    {
        id: 2,
        language: "CSS",
        experience: "Avanced"
    },
    {
        id: 3,
        language: "Sass",
        experience: "Avanced"
    },
    {
        id: 4,
        language: "Javascript",
        experience: "Avanced"
    },
    {
        id: 5,
        language: "ReactJs",
        experience: "Avanced"
    },
    {
        id: 6,
        language: "NextJs",
        experience: "Avanced"
    }
]

export const backEndSkills = [
    {
        id: 1,
        language: "NodeJs",
        experience: "Intermediated"
    },
    {
        id: 2,
        language: "MYSQL",
        experience: "Intermediated"
    },
    {
        id: 3,
        language: "Postgree",
        experience: "Intermediated"
    },
    {
        id: 4,
        language: "C#",
        experience: "Intermediated"
    },
    {
        id: 5,
        language: "MongoDB",
        experience: "Intermediated"
    },
]

import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'
export const portfolio = [
    {
        id: 1,
        title: 'Seu titulo aqui',
        image: IMG1,
        name: 'Teste1',
        link: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    },
    {
        id: 2,
        title: 'Seu titulo aqui',
        image: IMG2,
        name: 'Teste2',
        link: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Seu titulo aqui',
        name: 'Teste3',
        link: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Seu titulo aqui',
        name: 'Teste4',
        link: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    }
    , {
        id: 1,
        image: IMG5,
        title: 'Seu titulo aqui',
        name: 'Teste5',
        link: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    }
    , {
        id: 1,
        image: IMG6,
        title: 'Seu titulo aqui',
        name: 'Teste6',
        github: 'https://github.com/biduedson',
        projectLink: 'https://github.com/biduedson'
    }
]

import AVTR1 from '../assets/avatar1.jpg'
import AVTR2 from '../assets/avatar2.jpg'
import AVTR3 from '../assets/avatar3.jpg'
import AVTR4 from '../assets/avatar4.jpg'
export const testimonials = [
    {
        id: 1,
        avatar: AVTR1,
        name: 'Tina Snow',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde inventore explicabo id, assumenda ipsam voluptas quae
        hic iure facilis iusto fugiat cumque debitis quia maxime animi.`
    },
    {
        id: 2,
        avatar: AVTR2,
        name: 'Shatta',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde inventore explicabo id, assumenda ipsam voluptas quae
        hic iure facilis iusto fugiat cumque debitis quia maxime animi.`
    },
    {
        id: 3,
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde inventore explicabo id, assumenda ipsam voluptas quae
        hic iure facilis iusto fugiat cumque debitis quia maxime animi.`
    },
    {
        id: 4,
        avatar: AVTR4,
        name: 'Nana Ama McBrown',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Unde inventore explicabo id, assumenda ipsam voluptas quae
        hic iure facilis iusto fugiat cumque debitis quia maxime animi.`
    }

]

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
export const contactMe = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        type: 'Email',
        name: 'biduzao.bidu21@gmail.com',
        link: 'mailto:biduzao.bidu21@gmail.com'
    },
    {
        id: 2,
        icon: <RiMessengerLine />,
        type: 'Messenger',
        name: 'Edson Gomes',
        link: 'https://m.me/bidu.edson'
    },
    {
        id: 3,
        icon: <BsWhatsapp />,
        type: 'WhatsApp',
        name: '+5511934867766',
        link: 'https://api.whatsapp.com/send?phone=5511934867766'
    },
]