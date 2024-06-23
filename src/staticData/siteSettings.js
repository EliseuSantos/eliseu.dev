import logo from "@/public/assets/img/site-logo.svg";
import {IoHomeOutline} from "react-icons/io5";
import {IoBriefcaseOutline} from "react-icons/io5";
import {SlGraduation} from "react-icons/sl";
import {
    FaRegFileAlt,
    FaRegEnvelope,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import {LiaBlogSolid} from "react-icons/lia";
import {BiCommentDetail} from "react-icons/bi";
import {FaRegUser} from "react-icons/fa6";
import {MdFormatListBulleted} from "react-icons/md";

export const siteSettings = {
    logo: {
        image: logo?.src,
        alt: "Eliseu",
        url: "/",
        text: "Eliseu",
    },
    headersMenu: [
        {
            id: 1,
            title: "Início",
            selector: "#home",
            url: "/",
            Icon: <IoHomeOutline/>,
            notVisibleRoutes: [],
        },
        {
            id: 2,
            title: "Sobre",
            selector: "#about",
            url: "/",
            Icon: <FaRegUser/>,
            notVisibleRoutes: [],
        },
        {
            id: 3,
            title: "Serviços",
            selector: "#service",
            url: "/",
            Icon: <IoBriefcaseOutline/>,
            notVisibleRoutes: [],
        },
        {
            id: 4,
            title: "Habilidades",
            selector: "#skill",
            url: "/",
            Icon: <SlGraduation/>,
            notVisibleRoutes: [],
        },
        {
            id: 5,
            title: "Curriculo",
            selector: "#resume",
            url: "/",
            Icon: <FaRegFileAlt/>,
            notVisibleRoutes: [],
        },
        {
            id: 6,
            title: "Portfólio",
            selector: "#portfolio",
            url: "/",
            Icon: <MdFormatListBulleted/>,
            notVisibleRoutes: [],
        },
        {
            id: 7,
            title: "Blog",
            selector: "#blog",
            url: "/",
            Icon: <LiaBlogSolid/>,
            notVisibleRoutes: [],
        },
        {
            id: 8,
            title: "Testemunho",
            selector: "#testimonial",
            url: "/",
            Icon: <BiCommentDetail/>,
            notVisibleRoutes: [],
        },
        {
            id: 9,
            title: "Contato",
            selector: "#contact",
            url: "/",
            Icon: <FaRegEnvelope/>,
            notVisibleRoutes: [],
        },
    ],
    socialMedias: [
        {
            id: 2,
            name: "Linkedin",
            tooltip: "Share with Linkedin",
            Icon: <FaLinkedin/>,
            url: "#",
        },
        {
            id: 3,
            name: "X",
            tooltip: "Share with X",
            Icon: <FaTwitter/>,
            url: "#",
        },
    ],
    preloader: {
        image: logo?.src,
    },
};
