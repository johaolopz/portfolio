import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { services } from "../data"
import ServiceCard from "../components/ServiceCard"

const index = () => {
  let divKey = 0
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
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
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{marginLeft:"-1.5rem", marginRight:"-1.5rem"}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service => {
              divKey++
              return (
              <div key={divKey} className="bg-gray-200 rounded-lg lg:col-span-1">
                <ServiceCard service={service} />
              </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

// return {
//   props:{
//     services:data.services,
//   }
// }
// }

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