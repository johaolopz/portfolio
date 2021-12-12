import Image from "next/image"
import profilePhoto from "../images/profilePhoto.jpg"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {FaLaptopCode} from "react-icons/fa"
import {GiDiploma} from "react-icons/gi"
import { useTheme } from "next-themes"

const Sidebar = () => {
    const { theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full">
                <Image
                    src={profilePhoto}
                    alt="profile photo"
                    className="rounded-full"
                />
            </div>
            <h3 className="my-4 text-3xl font-medium tracking-wider font-smooch">
                <span className="text-green">Johao</span>
                López
            </h3>
            <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                <FaLaptopCode className="w-6 h-6" />
                Full Stack Web Developer
            </p>
            <a 
                href=""
                download="name"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
            >
                Download Resume
            </a>
            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <GiDiploma className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Guayaquil, Ecuador</span>
                </div>
                <p className="my-2">johao.lopz.m@gmail.com</p>
                <p className="my-2">+593967667856 / +593959810663</p>
            </div>
            {/* Buttons */}
            <button
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none" 
                onClick={()=>window.open('mailto:johao.lopz.m@gmail.com')}>
                Email me</button>
            <button 
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
                onClick={changeTheme}>
                Theme Mode
            </button>

        </div>
    )
}

export default Sidebar
