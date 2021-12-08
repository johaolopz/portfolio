import { RiComputerLine } from "react-icons/ri"
import { IService } from "./type"
import { FaServer } from "react-icons/fa"
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"

export const services:IService[] = [
    {
        Icon: MdDeveloperMode,
        title: "Full Stack Development",
        about: "I have full capabilities to create high-performance applications in the <b>Javascript ecosystem</b>",
        
    },
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "I can develop scalable SPAs with technologies: <b> Html5, Css3, Javascript, React, Redux-Hooks, Figma, MaterialUi </b>, and more ...",
        
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about: "On the backend side and for the construction of <b>REST API</b> I use <b> NodeJs, Express, PostgreSQL, Sequelize, JWT </b> and other frameworks and libraries",
        
    },
    {
        Icon: RiComputerLine,
        title: "Webmaster and SEO",
        about: "I also have intermediate knowledge for the development and administration of websites with <b>Wordpress, Divi theme and search engine optimization</b>.",
        
    },
]