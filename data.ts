import { RiComputerLine, RiCodeBoxFill } from "react-icons/ri"
import { IProject, IService, ISkill } from "./type"
import { FaServer } from "react-icons/fa"
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"
import weatherPic from "/images/WeatherApp/weatherApp_screen.jpg"
import pokedexPic from "/images/Pokedex/pokedex_screen.jpg"
import GesSaludPic from "/images/GesSalud/gesSalud_screen.jpg"
import TodolistPic  from "/images/TodoList/todolist_screen.jpg"
import ApiNodeJsPic  from "/images/ApiNodeJs/apiNodeJs_screen.png"

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

    export const project: IProject[] = [
        {
            id:1,
            name: "Weather App",
            description: "This Web Application allows you to check the weather of all the cities of the world.",
            image: weatherPic,
            deployed_url: "https://johaolopz.github.io/Weather-App/",
            github_url: "https://github.com/johaolopz/Weather-App",
            category: ["React/Redux"],
            key_techs: ["React","Hooks","Html5","Css3","JavaScript","Fetch"]
        },
        {
            id:2,
            name: "Pokedex",
            description: "Single Page Application that allows you to consult information about each pokemon, their abilities and strength. At the same time it allows you to create a pokemon.",
            image: pokedexPic,
            deployed_url: "https://pokedexjlopez.herokuapp.com/",
            github_url: "https://github.com/johaolopz/henry_pi",
            category: ["NodeJs/ExpressJs"],
            key_techs: ["React","Redux","NodeJs","ExpressJs","Axios"]
        },
        {
            id:3,
            name: "ToDO List",
            description: "Responsive Mini App to use a to-do list, with post it notes mode, handling states.",
            image: TodolistPic,
            deployed_url: "https://johaolopz.github.io/ToDoList/",
            github_url: "https://github.com/johaolopz/ToDoList",
            category: ["React/Redux"],
            key_techs: ["React","Hooks","Redux","JavaScript","MaterialUi"]
        },
        {
            
            id:4,
            name: "GesSalud",
            description: "Web System for managing shifts and assigning specialists for the conKyF clinic in Argentina.",
            image: GesSaludPic,
            deployed_url: "https://ges-salud.vercel.app/",
            github_url: "https://github.com/guillevidal/GesSalud",
            category: ["PERN_Stack"],
            key_techs: ["PostgreSQL","ExpressJs","React","NodeJs","JWT","NodeMailer","Multer","Others"]
        },
        {
            id:5,
            name: "API RESTful",
            description: "This is an API made with MongDB, ExpressJS and NodeJs to be consumed by the Frontend.",
            image: ApiNodeJsPic,
            deployed_url: "https://github.com/johaolopz/api_nodeJs_p1",
            github_url: "https://github.com/johaolopz/api_nodeJs_p1",
            category: ["MongoDB", "NodeJs/ExpressJs"],
            key_techs: ["NodeJs","ExpressJs","MongoDB","Robo 3T","JavaScript","Postman"]
        }
]