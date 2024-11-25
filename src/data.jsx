import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/twiter2.png';
  import Work2 from './assets/kankulator.png';
  import Work3 from './assets/Skrinshot 2024-11-25 064534.png';
  import Work4 from './assets/imtihonda.png';
  import Work5 from './assets/notion.png';
  import Work6 from './assets/quiz.png';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Maxmudov',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Bekzod',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '17 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: "O'zbek",
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: "O'zbekistan",
    },
  
    {
      id: 7,
      title: 'Phone Number: ',
      description: '+998901987308',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'bekzodmaxmudov131@gmail.com',
    },
  
    {
      id: 9,
      title: 'Telegram : ',
      description: '@BEKZODMAXMUDOVV',
    },
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'Russian, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '2+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '60+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '40+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '15+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2024 - PRESENT',
      title: 'Web Developer <span> Envato </span>',
      desc: 'I am Front End Web developer I  know Html, React, JavaScript, TypeScript, Angular, Vite',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023 - 2024',
      title: 'UI/UX Designer <span> Themeforest </span>',
      desc: 'Men  photoshop, 3d dizaynerlik, va boshqa narsalarni bilaman ',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Consultant <span> Videohive </span>',
      desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'It Park <span> Uzbekistan </span>',
      desc: 'Full Stack dasturchi 5ta tilni mukammal biladi, bu imkoniyatni sizga faqatgina IT Park beraoladi shoshiling imkonikyatni qoldan boy bermay Full Stack dasturchiga aylaning.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'It Park <span> Uzbekistan, Samarqand </span>',
      desc: 'Full Stack dasturchi 5ta tilni mukammal biladi, bu imkoniyatni sizga faqatgina IT Park beraoladi shoshiling imkonikyatni qoldan boy bermay Full Stack dasturchiga aylaning.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'IT TAT <span> Uzbekistan </span>',
      desc: 'Full Stack dasturchi 5ta tilni mukammal biladi, bu imkoniyatni sizga faqatgina IT Park beraoladi shoshiling imkonikyatni qoldan boy bermay Full Stack dasturchiga aylaning.',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '90',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '80',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '95',
    },
  
    {
      id: 4,
      title: 'TypeScript',
      percentage: '60',
    },
  
    {
      id: 5,
      title: 'Vite',
      percentage: '50',
    },
  
    {
      id: 6,
      title: 'PHP',
      percentage: '30',
    },
  
    {
      id: 7,
      title: 'Angular',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'React',
      percentage: '85',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Web Site',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Web Site Twitter',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Bekzod',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'JavaScript, React, TypeScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.twitter.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Canculator',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Otabek',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.canculator.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Chess Game',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Web Page',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Shuxrat',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html, Javascript, CSS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.chessgame.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Web Site  Lisst Off Users',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Web Site',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Sardor',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.list.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Notion App',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Muxammad',
        },
        {
          title: 'Language : ',
          desc: 'React JS, TypeScript',
        },
        {
          title: 'Preview : ',
          desc: 'www.Notion.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Quiz game ',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Quiz Game',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Shoxrux',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html, CSS, JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.quizgame.com',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  