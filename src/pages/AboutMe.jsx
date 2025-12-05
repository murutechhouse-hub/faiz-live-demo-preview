import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { RiWhatsappFill } from 'react-icons/ri'

import ButtonIcon from "../components/Button/IconButton/IconButton"

export default function AboutMe({ data }) {
    if (!data) return "null"
    return (
        <section id="about" className="pt-7 lg:pt-16 bg-background">
            <div >
                <div className="flex flex-col lg:flex-row mx-8 lg:mx-10">

                    <div>

                        <div >
                            <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>
                                About Me
                                <span className="text-5xl text-secondary20">.</span>
                            </h1>
                        </div>

                        <div className="mt-8 md:mx-16">

                            <div className="lg:text-xl ">

                                <div className="flex items-center justify-start gap-x-3 mb-3">
                                    <img
                                        src={data.photo}
                                        alt="Faiz"
                                        className="w-12 lg:w-16 shadow-2xl rounded-xl" />

                                    <p className="font-bold text-xl lg:text-2xl ">
                                        {data.prg1}
                                    </p>
                                </div>

                                <p className="mb-3">
                                    {data.prg2}
                                </p>

                                <p className="">
                                    {data.prg3}
                                </p>

                            </div>

                            <div className="flex flex-row  items-center justify-between gap-x-3 my-6">

                                <h2 className="text-lg lg:text-xl font-bold  ">Contact Me</h2>

                                <div className="w-16 lg:w-[560px] h-0">
                                    <span className="block h-[2px] lg:h-[2.5px] bg-black"></span>
                                </div>

                                <div className="flex flex-row gap-5 justify-start">

                                    <ButtonIcon
                                        href="https://www.linkedin.com/in/faaaizs/"
                                        target="_blank"
                                        icon={<FaLinkedin size={32} />}
                                    />

                                    <ButtonIcon
                                        href="https://wa.me/628512109781"
                                        target="_blank"
                                        icon={<RiWhatsappFill size={32} />}
                                    />

                                    <ButtonIcon
                                        href="mailto:fsutdrazat@gmail.com"
                                        target="_blank"
                                        icon={<FaEnvelope size={32} />}
                                    />




                                </div>

                            </div>

                        </div>



                    </div>

                </div>
            </div>

        </section>
    )
}
