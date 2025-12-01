import { useState } from "react"
import { ArrowUpRightIcon } from "lucide-react"

import OutLineButton from "../components/Button/OutlineButton"

import { motion } from "motion/react"
import IconTextButton from "../components/Button/IconTextButton"


export default function Experience({ data }) {
    const [isOpen, setOpen] = useState(false)

    if (!data) return null

    const myExperience =
        <div className="flex flex-wrap justify-center">

            {data.experience.map(ex => {
                return (

                        <div id={ex.id} className="mt-8 ">

                            <h1 className="text-lg font-bold lg:w-[352px]">
                                {ex.position} - {ex.company}
                            </h1>

                            <p className="  lg:font-medium text-slate-400">
                                {ex.date}
                            </p>

                            <p className="lg:w-[316px] text-base">{ex.do1}</p>

                            {/* <div id={ex.id} className="mt-5 flex items-start md:w-24">
                            <h1 className="text-lg lg:text-xl font-bold text-primary">{ex.company}</h1>
                        </div> */}

                        </div>

                )
            }
            )}



        </div>

    return (
        <section className="pt-16 bg-background">

            <div >
                <div className="mx-8 lg:mx-10 ">

                    <h1 className='text-primary text-3xl lg:text-4xl font-bold'>Experience<span className="text-5xl text-secondary20">.</span></h1>

                    <div >
                        {myExperience}
                    </div>

                    <div className=" flex justify-center mt-10">
                        <IconTextButton icon2={<ArrowUpRightIcon />} href="https://drive.google.com/drive/folders/1rg9GioRG2ZKG45LN2odWKof5gwG6ehBd?usp=sharing" lable="My Resume" />

                    </div>

                </div>
            </div>

        </section>
    )
}
