import ButtonIcon from "../components/Button/IconButton"

export default function AboutMe({ data }) {
    if (!data) return "null"
    return (
        <section id="about" className="pt-20 lg:pt-16 bg-background">
            <div >
                <div className="flex flex-col lg:flex-row mx-8 lg:mx-10">

                    <div>

                        <div >
                            <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>
                                About Me
                                <span className="text-5xl text-secondary20">.</span>
                            </h1>
                        </div>



                        <div className="mt-5  md:w-[700px] md:mx-12 lg:text-xl ">

                            <div className="flex  items-center justify-start gap-x-3 mb-3">
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

                        <div className="flex flex-row justify-center gap-5 lg:justify-start my-6 md:mx-12">

                            <ButtonIcon
                                href="https://www.linkedin.com/in/faaaizs/"
                                src="linkedin.svg"
                                target="_blank"
                                alt="Linked In"
                            />

                            <ButtonIcon
                                href="https://wa.me/628512109781"
                                src="social-whatsapp.svg"
                                target="_blank"
                                alt="Github"
                            />

                            <ButtonIcon
                                href="mailto:fsutdrazat@gmail.com"
                                src="email.svg"
                                target="_blank"
                                alt="Behance"
                            />

                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
}
