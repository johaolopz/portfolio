import { project as projectsData } from "../data"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavBar from "../components/ProjectsNavBar";
import { useState } from "react";
import { Category } from "../type";
import { motion } from "framer-motion";
import { stagger, fadeInUp, routeAnimation } from "../animations";

const Projects = () => {
    let divKeyId=0;
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("All")

    const [showDetail, setShowDetail] = useState<number | null>(null)

    const handlerFilterCategory = (category: Category | "All") => {
        setActive(category)
        if(category === "All") {
            setProjects(projectsData)
            return
        }

       const newArray = projectsData.filter((project)=> project.category.includes(category))
       setProjects(newArray)
    }

    return (
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{height:'65vh'}}
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit">
            <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active={active} />
            <motion.div className="grid grid-cols-12 gap-4 my-3 relative"
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                {
                    projects.map(project => {
                        divKeyId++;
                        return (
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
                            key={divKeyId}
                            variants={fadeInUp}
                        >
                            <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail} />
                        </motion.div>
                    )})
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects
