import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { services } from "../data"
import ServiceCard from "../components/ServiceCard"
import { motion } from "framer-motion"
import { fadeInUp, stagger, routeAnimation } from "../animations"

const index = ({endpoint}) => {
  let divKey = 0
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit">
      <h5 className="my-3 font-medium">
        I am a Systems Engineer and Full Stack Web Developer. I highlight my soft
        skills such as: communication, dedication, commitment, self-learning,
        teamwork, among others. During the last year I have participated in the
        development of responsive web applications with the PERN stack (PostgreSQL,
        ExpressJs, React, NodeJs). I have both frontend and backend experience in
        JavaScript environment. Although I have previously programmed in academic
        projects with the free software package XAMPP. For a few months I was working
        in Freelance mode as a Webmaster and SEO. I also have knowledge of wired and
        wireless LAN administration, remote assistance and relationship with the client.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:"-1.5rem", marginRight:"-1.5rem"}}>
        <h4 className="my-3 text-xl font-bold tracking-wide">What I Offer</h4>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map(service => {
              divKey++
              return (
              <motion.div key={divKey} className="bg-gray-200 rounded-lg
              dark:bg-dark-200 lg:col-span-1"
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>)
            })
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()

  // console.log(data)

return {
  props:{
    endpoint:process.env.VERCEL_URL,
  }
}
}

// export const getStaticProps = async (context:GetStaticPropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

// return {
//   props:{
//     services:data.services,
//   }
// }
// }