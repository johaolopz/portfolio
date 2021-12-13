import { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{value:Category | "All", handlerFilterCategory:Function, active:string }> = ({
    value,
    handlerFilterCategory,
    active
}) => {
    let className = 'cursor-pointer hover:text-green'
    if (active === value) className += " text-green"
    return (
        <li className={className}
            onClick={()=>handlerFilterCategory(value)}
        >
            {value}
        </li>
    )
}


const ProjectsNavBar:FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value="All" {...props} />
            <NavItem value="React/Redux" {...props} />
            <NavItem value="NodeJs/ExpressJs" {...props} />
            <NavItem value="PERN Stack" {...props} />
        </div>
    )
}

export default ProjectsNavBar
