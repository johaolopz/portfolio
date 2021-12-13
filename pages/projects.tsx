import { project } from "../data"
import ProjectCard from "../components/ProjectCard"

const projects = () => {
    let divKeyId=0;
    return (
        <div>
            <nav>Navbar</nav>
            <div className="grid grid-cols-12 gap-4 my-3">
            {
                project.map(project => {
                    divKeyId++;
                    return (
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2" key={divKeyId}>
                        <ProjectCard project={project} key={project.name} />
                    </div>
                )})
            }
            </div>
        </div>
    )
}

export default projects
