import Button from "../components/Button/Button"
import { motion } from "motion/react"

export default function Hero({ data }) {


    if (!data) return null

    return (
        <section id="hero" className="pt-24 lg:pt-32 bg-background">

            <div className="flex flex-col items-center mx-8 justify-center lg:mx-10">

                <div className="flex flex-col items-center justify-center text-center mt-4 mb-20 lg:mt-0 lg:mx-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-xl lg:text-2xl font-bold">Hello, I'm {data.name} 👋🏻 </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 27 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-6xl font-bold mt-2 lg:mt-0 text-secondary20 lg:text-8xl ">
                        {data.role} <span className="text-primary"> Designer </span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium mt-6 lg:mt-7 w-72 lg:w-[360px] lg:text-lg ">{data.desc}</motion.h2>


                </div>

                <div className="flex flex-row items-center justify-between w-full mb-8">

                    <motion.div
                        initial={{ opacity: 0, y: 9 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>
                        <Button href="https://linktr.ee/mushawwirrd" lable="Contact Me" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center ">

                        <motion.img
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            src={data.photo}
                            alt={data.name}
                            className="w-20 lg:w-24 shadow-2xl rounded-xl" />

                    </motion.div>

                </div>

            </div>

        </section>

    )
}



