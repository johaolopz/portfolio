import { RiComputerLine, RiCodeBoxFill } from "react-icons/ri"
import { IService, ISkill } from "./type"
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

export const languages:ISkill[] = [
{
    Icon: RiCodeBoxFill,
    name:"Html5",
    level: "85%"
},
{
    Icon: RiCodeBoxFill,
    name:"Css3",
    level: "85%"
},
{
    Icon: RiCodeBoxFill,
    name:"JavaScript",
    level: "85%"
},
{
    Icon: RiCodeBoxFill,
    name:"React",
    level: "85%",
},
{
    Icon: RiCodeBoxFill,
    name:"Redux",
    level: "75%"
},
{
    Icon: RiCodeBoxFill,
    name:"NextJs",
    level: "50%"
},
{
    Icon: RiCodeBoxFill,
    name:"Tailwindcss",
    level: "50%"
},
{
    Icon: RiCodeBoxFill,
    name:"NodeJs",
    level: "75%"
},
{
    Icon: RiCodeBoxFill,
    name:"ExpressJs",
    level: "70%"
},
{
    Icon: RiCodeBoxFill,
    name:"Sequelize",
    level: "75%"
},
{
    Icon: RiCodeBoxFill,
    name:"PostgreSQL",
    level: "65%"
}
]

export const tools:ISkill[] = [
    {
        Icon: RiCodeBoxFill,
        name:"Windows",
        level: "95%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Linux",
        level: "55%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"VS Code",
        level: "85%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Postman",
        level: "75%",
    },
    {
        Icon: RiCodeBoxFill,
        name:"Pgadmin",
        level: "75%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Figma",
        level: "65%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Github Pages",
        level: "95%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Heroku",
        level: "65%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Vercel",
        level: "65%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Google Meet",
        level: "100%"
    },
    {
        Icon: RiCodeBoxFill,
        name:"Zoom",
        level: "80%"
    }
    ]