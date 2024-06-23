import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
    FaBlog,
    FaBriefcase,
    FaFolderOpen,
    FaGraduationCap,
    FaRegEnvelopeOpen,
} from "react-icons/fa";
import {GrTasks} from "react-icons/gr";
import {BiCheckDouble, BiCommentCheck} from "react-icons/bi";

import db from "@/public/assets/img/partners/db.png";
import willbank from "@/public/assets/img/partners/willbank.jpg";
import invillia from "@/public/assets/img/partners/Invillia logo.png";
import lab3dvlp from "@/public/assets/img/partners/lab3dvlp.png";
import pagseguro from "@/public/assets/img/partners/pagseguro.webp";
import vagalume from "@/public/assets/img/partners/vagalume.jpg";
import vivitech from "@/public/assets/img/partners/vivitech.jpeg";
import medlynx from "@/public/assets/img/partners/medlynx.png";
import carrefour from "@/public/assets/img/partners/carrefour.png";

import aws from "@/public/assets/img/tecnology/aws.webp";
import bun from "@/public/assets/img/tecnology/bun.jpg";
import gcp from "@/public/assets/img/tecnology/gcp.png";
import graphql from "@/public/assets/img/tecnology/graphql.png";
import kafka from "@/public/assets/img/tecnology/kafka.png";
import nestjs from "@/public/assets/img/tecnology/nestjs.jpg";
import nodejs from "@/public/assets/img/tecnology/nodejs.png";
import pact from "@/public/assets/img/tecnology/pact.png";
import reactjs from "@/public/assets/img/tecnology/reactjs.png";
import singlespa from "@/public/assets/img/tecnology/singlespa.png";
import solidity from "@/public/assets/img/tecnology/solidity.svg";
import spring from "@/public/assets/img/tecnology/spring.png";
import web3 from "@/public/assets/img/tecnology/web3.webp";
import laravel from "@/public/assets/img/tecnology/laravel.png";
import django from "@/public/assets/img/tecnology/django.png";

import backend from "@/public/assets/img/skill/backend.png";
import blockchain from "@/public/assets/img/skill/blockchain.png";
import cloud from "@/public/assets/img/skill/cloud.png";
import database from "@/public/assets/img/skill/database.png";
import devops from "@/public/assets/img/skill/devops.png";
import frontend from "@/public/assets/img/skill/frontend.png";
import iot from "@/public/assets/img/skill/iot.png";
import scrum from "@/public/assets/img/skill/scrum.png";
import tests from "@/public/assets/img/skill/tests.png";


import userImage from "@/public/assets/img/user-sidebar-thumb.jpg";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.jpg";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/article1.png";
import blog1Image from "@/public/assets/img/blog/article1.png";
import blog2Thumbnail from "@/public/assets/img/blog/article2.png";
import blog2Image from "@/public/assets/img/blog/article2.png";
import blog3Thumbnail from "@/public/assets/img/blog/article3.png";
import blog3Image from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import {IoHomeOutline} from "react-icons/io5";

export const introduce = {
    iconBox: {
        Icon: <IoHomeOutline className="text-theme" size={14}/>,
        title: "Início",
    },
    heading: {
        heading1: "Transformando o",
        heading2: "Mundo Digital",
    },
    desc: (
        <p>
            Eu sou{" "}
            <span className="font-medium text-black dark:text-white/90">
        Desenvolvedor Fullstack
      </span>{" "}
            apaixonado, com mais de 10 anos de experiência na área, reúno o melhor das
            tecnologias de frontend e backend para criar
            soluções digitais eficientes, integradas e poderosas.
        </p>
    ),
    jobs: [
        {
            id: 1,
            title: "Disponível para trabalho",
            icon: <BiCheckDouble size={25} className="text-theme mr-1"/>,
        },
        {
            id: 2,
            title: "Consultoria MFE",
            icon: <BiCheckDouble size={25} className="text-theme mr-1"/>,
        },
    ],
};

export const partners = [
    {
        imgUrl: willbank,
        altText: "Will Bank",
        link: "#",
    },
    {
        imgUrl: pagseguro,
        altText: "PagBank",
        link: "#",
    },
    {
        imgUrl: invillia,
        altText: "Invillia",
        link: "#",
    },
    {
        imgUrl: lab3dvlp,
        altText: "Lab3DVLP",
        link: "#",
    },
    {
        imgUrl: vagalume,
        altText: "Vagalume Midia",
        link: "#",
    },
    {
        imgUrl: vivitech,
        altText: "ViViTECH",
        link: "#",
    },
    {
        imgUrl: db,
        altText: "<DB>",
        link: "#",
    },
    {
        imgUrl: medlynx,
        altText: "MedLynx Systems",
        link: "#",
    },
    {
        imgUrl: carrefour,
        altText: "Carrefour",
        link: "#",
    },
];

export const technologies = [
    {
        id: 1,
        title: "AWS",
        logo: aws,
        url: "#",
    },
    {
        id: 1,
        title: "GCP",
        logo: gcp,
        url: "#",
    },
    {
        id: 1,
        title: "NestJS",
        logo: nestjs,
        url: "#",
    },
    {
        id: 1,
        title: "Web 3.0",
        logo: web3,
        url: "#",
    },
    {
        id: 1,
        title: "Laravel",
        logo: laravel,
        url: "#",
    },
    {
        id: 1,
        title: "Graphql",
        logo: graphql,
        url: "#",
    },
    {
        id: 1,
        title: "PACT",
        logo: pact,
        url: "#",
    },
    {
        id: 1,
        title: "Solidity",
        logo: solidity,
        url: "#",
    },
    {
        id: 1,
        title: "BunJS",
        logo: bun,
        url: "#",
    },
    {
        id: 1,
        title: "NodeJS",
        logo: nodejs,
        url: "#",
    },
    {
        id: 1,
        title: "ReactJS",
        logo: reactjs,
        url: "#",
    },
    {
        id: 1,
        title: "SingleSPA",
        logo: singlespa,
        url: "#",
    },
    {
        id: 1,
        title: "Kafka",
        logo: kafka,
        url: "#",
    },
    {
        id: 1,
        title: "SpringBoot",
        logo: spring,
        url: "#",
    },
    {
        id: 1,
        title: "Django",
        logo: django,
        url: "#",
    }
];

export const userDetails = [
    {
        field: "Telefone",
        value: "‪+55 79 98116‑0655‬",
        link: "tel:‪+5579981160655‬"
    },
    {
        field: "Session",
        value: "05a980d53e5da5cc501f504a55fa1d2cc8ad9451453a5f3fa7ad8e73981ce2a63d",
        link: "https://getsession.org"
    },
    {
        field: "Idioma",
        value: "Portuguese, English(Basic)",
    },
    {
        field: "Email",
        value: "s.eliseu@proton.me",
        link: "mailto:‪s.eliseu@proton.me‬"
    },
    {
        field: "GitHub",
        value: "github.com/EliseuSantos",
        link: "https://github.com/EliseuSantos"
    },
    {
        field: "Linkedin",
        value: "linkedin.com/in/eliseusantos",
        link: "https://www.linkedin.com/in/eliseusantos"
    },
];

export const userDetailsSidebar = {
    userImage: userImage,
    userImageLight: userImageLight,
    userName: "Eliseu",
    designations: ["Software Developer", "Musician", "Blockchain Developer"],
    basicInfo: [
        {
            id: 1,
            field: "País",
            value: "Brasil",
        },
        {
            id: 2,
            field: "Estado",
            value: "Sergipe",
        },
        {
            id: 3,
            field: "Idade",
            value: "29",
        },
    ],
    skillsInfo: [
        {
            id: 1,
            name: "JS",
            value: 90,
        },
        {
            id: 2,
            name: "Java",
            value: 80,
        },
        {
            id: 3,
            name: "PHP",
            value: 90,
        },
        {
            id: 4,
            name: "Python",
            value: 60,
        },
    ],
};

export const projectExperiences = [
    {
        title: "Anos de Experiência",
        count: 10,
        postFix: true,
    },
    {
        title: "Projetos",
        count: 12,
        postFix: true,
    },
    {
        title: "Contribuição Open Source",
        count: 5,
        postFix: true,
    },
    {
        title: "Prêmios conquistados",
        count: 0,
        postFix: false,
    },
];

export const services = {
    servicesHeading: {
        icon: <FaBriefcase className="text-theme"/>,
        title: "SERVIÇOS",
        heading: "Meus",
        coloredHeading: "Serviços",
        description:
            "Foco em soluções completas e eficientes, prontas para uso e focadas na experiência do usuário, sempre buscando inovação, qualidade e segurança.",
    },
    servicesData: [
        {
            "id": 1,
            "number": "01",
            "title": "Desenvolvimento Web",
            "desc": "Desenvolvo produtos que vão além da estética, tornando-os funcionais e prontos para lançamento.",
            "icon": <WebDevIcon/>,
        },
        {
            "id": 2,
            "number": "02",
            "title": "Consultoria",
            "desc": "Especialista em MicroFrontEnd e otimização de performance e SEO.",
            "icon": <SeoIcon/>,
        },
        {
            "id": 3,
            "number": "03",
            "title": "IoT/CFTV",
            "desc": "Projetos completos de automação residencial e sistemas de CFTV eficientes.",
            "icon": <UiUxIcon/>,
        },
        {
            "id": 4,
            "number": "04",
            "title": "Smart Contracts",
            "desc": "Desenvolvimento de contratos inteligentes seguros e eficientes.",
            "icon": <BrandingIcon/>,
        }

    ],
};

export const skills = {
    skillsHeading: {
        icon: <FaGraduationCap className="text-theme"/>,
        title: "HABILIDADES",
        heading: "Minhas",
        coloredHeading: "Habilidades",
        description:
            "Atuo com diversas tecnologias essenciais para o desenvolvimento moderno, garantindo a criação de produtos funcionais, eficientes e atualizados.",
    },
    skillsData: [
        {
            image: frontend,
            percent: 90,
            name: "Frontend (Web e Mobile)",
        },
        {
            image: backend,
            percent: 90,
            name: "Backend (Javascript, Java, PHP, Python)",
        },
        {
            image: cloud,
            percent: 90,
            name: "Plataformas de nuvem (AWS, GCP)",
        },
        {
            image: scrum,
            percent: 90,
            name: "Metodologias ágeis (Scrum, Kanban)",
        },
        {
            image: database,
            percent: 90,
            name: "Banco de dados SQL e NoSQL (Postgres, Mysql, Mongo, Redis)",
        },
        {
            image: devops,
            percent: 90,
            name: "DevOps e automação (Docker, Terraform, Kubernetes, CI/CD)",
        },
        {
            image: tests,
            percent: 90,
            name: "Segurança cibernética e testes automatizados",
        },
        {
            image: blockchain,
            percent: 90,
            name: "Blockchain e contratos inteligentes (Solidity)",
        },
        {
            image: iot,
            percent: 90,
            name: "Internet das Coisas (IoT) e automação residencial",
        },

    ]
    ,
};

export const resume = {
    resumeHeading: {
        icon: <FaFolderOpen className="text-theme"/>,
        title: "Currículo",
        heading: "Minhas",
        coloredHeading: "Experiência",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    resumeData: [
        {
            platform: "Will Bank",
            duration: "Junho, 2021 - Atualmente",
            link: "https://www.willbank.com.br",
            position: "Senior Software Engineer",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "Agency PRO",
            link: "https://agency-pro.com/",
            duration: "Março, 2023 - Atualmente",
            position: "Co-Founder",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "PagSeguro",
            duration: "2020 - 2021",
            link: "https://pagseguro.uol.com.br/",
            position: "Analista de Sistem Senior",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "Lab3Dvlp",
            duration: "2018-2020",
            link: "https://lab3dvlp.com/",
            position: "Tech Leader",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "Vagalume Midia",
            duration: "2018-2018",
            link: "https://www.vagalume.com.br/",
            position: "UX Designer - Freelancer",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "ViViTech",
            duration: "2018-2018",
            link: "#",
            position: "Desenvolvedor Senior",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "Token Group",
            duration: "2017-2018",
            link: "#",
            position: "Desenvolvedor Senior",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "Medlynx",
            duration: "2015-2017",
            link: "https://medlynx.com.br/",
            position: "Desenvolvedor Pleno",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
        {
            platform: "SkilDesign",
            duration: "2012-2013",
            link: "https://agency-pro.com/",
            position: "Fundador",
            description:
                "Owing to advancements in product other designer technologies aute voluptate.",
        },
    ],
};

export const educations = {
    educationsHeading: {
        icon: "",
        title: "",
        heading: "Minha",
        coloredHeading: "Educação",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    educationsData:
        [
            {
                institution: "Universidade Estácio de Sá",
                duration: "2021-2026",
                degree: "Sistemas da Informação",
                description:
                    "Curso focado em desenvolver habilidades em análise de sistemas, programação, gestão de banco de dados e segurança da informação, preparando profissionais para enfrentar os desafios do mercado de TI.",
            },
            {
                institution: "IFS - Instituto Federal de Educação, Ciência e Tecnologia de Sergipe - (Trancado)",
                duration: "2015 - 2016",
                degree: "Bacharelado em Matemática",
                description:
                    "Estudos em fundamentos matemáticos, estatística, cálculo e álgebra, com foco no desenvolvimento de habilidades analíticas e de resolução de problemas complexos.",
            },
            {
                institution: "Microlins",
                duration: "2014-2014",
                degree: "Curso C# Básico, Intermediário e Avançado",
                description:
                    "Curso intensivo de C# cobrindo desde os conceitos básicos até técnicas avançadas de programação, incluindo desenvolvimento de aplicações desktop e web.",
            },
            {
                institution: "SofTeam",
                duration: "2013-2014",
                degree: "Curso Java SE",
                description:
                    "Curso prático em Java Standard Edition, abordando desde os fundamentos da linguagem até a criação de aplicações robustas e seguras utilizando Java.",
            },
            {
                institution: "Colégio Estadual Professor Hamilton Alves Rocha",
                duration: "2014-2018",
                degree: "Ensino Médio",
                description:
                    "Formação completa no Ensino Médio.",
            },
        ],
};

export const portfolio = {
    portfolioHeading: {
        icon: <GrTasks className="text-theme"/>,
        title: "PORTFOLIO",
        heading: "Novos ",
        coloredHeading: "Projetos",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    projectsData: [
        {
            id: 1,
            image: {
                thumbnail: portfolioImage1Thumb?.src,
                image: portfolioImage1?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectInfo: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES:",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 2,
            image: {
                thumbnail: portfolioImage2Thumb?.src,
                image: portfolioImage2?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectInfo: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 3,
            image: {
                thumbnail: portfolioImage3Thumb?.src,
                image: portfolioImage3?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectInfo: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
        {
            id: 4,
            image: {
                thumbnail: portfolioImage4Thumb?.src,
                image: portfolioImage4?.src,
                thumbnailText1: "Design",
                thumbnailText2: "Specialization",
            },
            type: "Branding",
            title: "Three wine glasses filled with candies",
            slug: "three-wine-glasses-filled-with-candies",
            projectHeading: {
                icon: <GrTasks className="text-theme"/>,
                title: "Project Details",
            },
            projectInfo: [
                {
                    field: "CLIENT",
                    value: "Envato Theme",
                },
                {
                    field: "SERVICES",
                    value: "Tips & Tricks, Design",
                },
                {
                    field: "DURATION",
                    value: "108 hrs",
                },
            ],
            projectDescription: {
                descriptionTitle: "Project Description",
                description:
                    "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
                descriptionLists: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                ],
                projectImage: [projectInner1Image?.src, projectInner2Image?.src],
            },
        },
    ],
};

export const blogs = {
    blogsHeading: {
        icon: <FaBlog className="text-theme"/>,
        title: "BLOG",
        heading: "Latest",
        coloredHeading: "Insights",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    blogsData: [
        {
            image: {
                thumbnail: blog1Thumbnail?.src,
                image: blog1Image?.src,
            },
            category: "UI Design",
            date: "03 May 2023",
            title: "Elevate your mornings with perfectly brewed coffee",
            slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
            blogInfo: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectInfo: [
                    {
                        field: "POSTED BY",
                        value: "Adrinao Smith",
                    },
                    {
                        field: "CATEGORY:",
                        value: "Tips & Tricks, Design",
                    },
                    {
                        field: "POSTED ON:",
                        value: "Noveber 01, 2023",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "Cappuccino Bliss",
                    description:
                        "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
                    descriptionListsTitle: "Benifits of coffee",
                    descriptionLists: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src],
                },
            },
        },
        {
            image: {
                thumbnail: blog2Thumbnail?.src,
                image: blog2Image?.src,
            },
            category: "UI Design",
            date: "03 May 2023",
            title: "Mastering the clock: A guide to time management",
            slug: "mastering-the-clock-a-guide-to-time-management",
            blogInfo: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectInfo: [
                    {
                        field: "POSTED BY",
                        value: "Adrinao Smith",
                    },
                    {
                        field: "CATEGORY:",
                        value: "Tips & Tricks, Design",
                    },
                    {
                        field: "POSTED ON:",
                        value: "Noveber 01, 2023",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "Cappuccino Bliss",
                    description:
                        "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
                    descriptionListsTitle: "Benifits of coffee",
                    descriptionLists: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src],
                },
            },
        },
        {
            image: {
                thumbnail: blog3Thumbnail?.src,
                image: blog3Image?.src,
            },
            category: "UI Design",
            date: "03 May 2023",
            title: "Homeward bound: Crafting a productive home office",
            slug: "homeward-bound-crafting-a-productive-home-office",
            blogInfo: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectInfo: [
                    {
                        field: "POSTED BY",
                        value: "Adrinao Smith",
                    },
                    {
                        field: "CATEGORY:",
                        value: "Tips & Tricks, Design",
                    },
                    {
                        field: "POSTED ON:",
                        value: "Noveber 01, 2023",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "Cappuccino Bliss",
                    description:
                        "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
                    descriptionListsTitle: "Benifits of coffee",
                    descriptionLists: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src],
                },
            },
        },
        {
            image: {
                thumbnail: blog1Thumbnail?.src,
                image: blog1Image?.src,
            },
            category: "UI Design",
            date: "03 May 2023",
            title: "Elevate your mornings with perfectly brewed coffee",
            slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
            blogInfo: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectInfo: [
                    {
                        field: "POSTED BY",
                        value: "Adrinao Smith",
                    },
                    {
                        field: "CATEGORY:",
                        value: "Tips & Tricks, Design",
                    },
                    {
                        field: "POSTED ON:",
                        value: "Noveber 01, 2023",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "Cappuccino Bliss",
                    description:
                        "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
                    descriptionListsTitle: "Benifits of coffee",
                    descriptionLists: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src],
                },
            },
        },
        {
            image: {
                thumbnail: blog2Thumbnail?.src,
                image: blog2Image?.src,
            },
            category: "UI Design",
            date: "03 May 2023",
            title: "Mastering the clock: A guide to time management",
            slug: "mastering-the-clock-a-guide-to-time-management",
            blogInfo: {
                projectHeading: {
                    icon: <FaBlog className="text-theme"/>,
                    title: "Blog Details",
                },
                projectInfo: [
                    {
                        field: "POSTED BY",
                        value: "Adrinao Smith",
                    },
                    {
                        field: "CATEGORY:",
                        value: "Tips & Tricks, Design",
                    },
                    {
                        field: "POSTED ON:",
                        value: "Noveber 01, 2023",
                    },
                ],
                projectDescription: {
                    descriptionTitle: "Cappuccino Bliss",
                    description:
                        "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
                    descriptionListsTitle: "Benifits of coffee",
                    descriptionLists: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
                    ],
                    projectImage: [projectInner2Image?.src, projectInner1Image?.src],
                },
            },
        },
    ],
};

export const testimonials = {
    testimonialsHeading: {
        icon: <BiCommentCheck className="text-theme"/>,
        title: "TESTEMUNHO",
        heading: "O que",
        coloredHeading: "as pessoas dizem",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    testimonialsData: [
        {
            id: 1,
            image: author1?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    Working with <span className="font-semibold text-theme">Reddick</span>{" "}
                    is a game-changer. Their coding expertise and commitment to quality
                    make every project a success.
                </div>
            ),
            name: "Alex Johnson",
            position: "Developer",
        },
        {
            id: 2,
            image: author2?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    <span className="font-semibold text-theme">Reddick</span> exceeds
                    expectations with top-tier coding skills. Reliable, collaborative, and
                    a true asset to any project. Highly recommended
                </div>
            ),
            name: "Mily Martin",
            position: "CEO @IT Theme",
        },
        {
            id: 3,
            image: author1?.src,
            desc: (
                <div className="text-sm md:text-[15px] leading-loose content">
                    Working with <span className="font-semibold text-theme">Reddick</span>{" "}
                    is a game-changer. Their coding expertise and commitment to quality
                    make every project a success.
                </div>
            ),
            name: "Alex Johnson",
            position: "Developer",
        },
    ],
};

export const contactInfo = {
    contactInfoHeading: {
        icon: <FaRegEnvelopeOpen className="text-theme"/>,
        title: "CONTATO",
        heading: "Fale",
        coloredHeading: "Comigo.",
        description:
            "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
    },
    contactInfoData: [
        {
            id: 1,
            field: "Localização",
            data: "Brasil - SE",
            Icon: <LocationIcon/>,
        },
        {
            id: 2,
            field: "E-mail",
            data: "s.eliseu@proton.me",
            Icon: <EmailIcon/>,
        },
        {
            id: 3,
            field: "Telefone",
            data: "‪+55 79 98116‑0655‬",
            Icon: <PhoneIcon/>,
        },
    ],
};
