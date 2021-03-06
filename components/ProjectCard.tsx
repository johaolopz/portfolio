import { FunctionComponent, useState } from 'react'
import { IProject } from '../type'
import Image from "next/image"
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../animations'

const ProjectCard:FunctionComponent<{
    project: IProject;
    showDetail: number | null;
    setShowDetail: (id: number | null) => void;
}> = ({
    project:{
        id,
        name,
        image,
        category,
        deployed_url,
        description,
        github_url,
        key_techs
    },
    showDetail,
    setShowDetail
}) => {
    return (
        <div>
            <Image
                src={image}
                alt={name}
                className='cursor-pointer h-12 w-12'
                onClick={()=>setShowDetail(id)}
                width="300"
                height="150"
                layout='responsive'
            />
            <p className='my-2 text-center'>{name}</p>

            {
                showDetail === id && (
                <div className='grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full
                                gap-x-12 text-black bg-gray-100 dark:text-white
                                dark:bg-dark-100 p-2 md:p-10 rounded-lg'>
                    <motion.div
                        variants={stagger}  
                        initial="initial"
                        animate="animate">
                        <motion.div variants={fadeInUp}
                            className='border-4 border-gray-100'>
                            <Image
                                src={image}
                                alt={name}
                                layout='responsive'
                                height="150"
                                width="300" />
                        </motion.div>
                        <motion.div className='flex justify-center my-4 space-x-3'
                            variants={fadeInUp}>
                            <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200'>
                                <AiFillGithub/> <span>Github</span>
                            </a>
                            <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200'>
                                <AiFillProject/> <span>Project</span>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2 className='mb-3 text-xl font-medium md:text-2xl' variants={fadeInUp}>{name}</motion.h2>
                        <motion.h3 className='mb-3 font-medium' variants={fadeInUp}>{description}</motion.h3>
                        <motion.div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wide' variants={fadeInUp}>
                            {
                                key_techs.map((tech)=>(
                                    <span key={tech}
                                      className='px-2 py-1 my-1 bg-gray-300 dark:bg-dark-200 rounded-sm'  
                                    >{tech}</span>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                    <button onClick={()=>setShowDetail(null)}
                        className='absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200'
                    >
                        <MdClose size={30} />
                    </button>
                </div>)
            }
        </div>
    )
}

export default ProjectCard
