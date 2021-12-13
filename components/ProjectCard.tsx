import { FunctionComponent, useState } from 'react'
import { IProject } from '../type'
import Image from "next/image"
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const ProjectCard:FunctionComponent<{
    project: IProject;
}> = ({
    project:{
        name,
        image,
        category,
        deployed_url,
        description,
        github_url,
        key_techs
    }
}) => {

    const [showDetail, setShowDetail] = useState(false)

    return (
        <div>
            <Image
                src={image}
                alt={name}
                className='cursor-pointer h-12 w-12'
                onClick={()=>setShowDetail(true)}
            />
            <p className='my-2 text-center'>{name}</p>

            {
                showDetail && (
                <div className='grid md:grid-cols-2'>
                    <div>
                        <Image
                            src={image}
                            alt={name}
                        />
                        <div>
                            <a href={github_url}>
                                <AiFillGithub/> <span>Github</span>
                            </a>
                            <a href={deployed_url}>
                                <AiFillProject/> <span>Project</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                        <div>
                            {
                                key_techs.map((tech)=>(
                                    <span key={tech}>{tech}</span>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={()=>setShowDetail(false)}>
                        <MdClose size={30} />
                    </button>
                </div>)
            }
        </div>
    )
}

export default ProjectCard
