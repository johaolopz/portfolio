import { languages, tools } from "../data"
import Bar from "../components/Bar"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animations"

const resume = () => {
    const str = "SoyHenry'"
    return (
        <motion.div className="px-6 py-2"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            System Engineering
                        </h5>
                        <p className="font-semibold">
                            Universidad Estatal Peninsula de Santa Elena (2010 - 2017)
                        </p>
                        <p className="my-3">
                        I am a systems engineer but I got my certification
                        as a Full Stack Web Developer at the {str}s bootcamp
                        and I continue to prepare myself in a self-taught way.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Full Stack Web Developer Jr
                        </h5>
                        <p className="font-semibold">
                            Individual projects and with a development team (2020 - on)
                        </p>
                        <p className="my-3">
                            During these last 2 years, since the global confinement by covid-19
                            in 2020, I resumed my programming activities independently and began
                            to update my knowledge. Then in 2021 I decided to do a contemporary
                            JS tools bootcamp and since then I have developed several academic
                            projects and a web system for a clinic in Argentina.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map(tool => <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
