import { ArrowUpRight, MoveRightIcon, MoveUpRight } from "lucide-react"

import ButtonIcon from "../components/Button/IconButton"
import IconTextButton from "../components/Button/IconTextButton"
import Button from "../components/Button/Button"


function Footer({ data }) {

    if (!data) return null


    return (
        <footer className="pt-20 bg-background ">
            <div className="pt-8 pb-4  ">

                <div className="flex flex-col items-center  justify-center mx-8 lg:mx-10 ">

                    <div className="w-24 md:w-28 mb-8">
                        <img src="muru.png" alt="" />
                    </div>

                    <div className="text-center mb-5">

                        <h1 className="text-xl lg:text-2xl"> Interested in working together? </h1>

                    </div>

                    <div className="flex items-center justify-center mb-10 ">
                        <Button href="mailto:fsutdrazat@gmail.com" lable={"Let's Build It"} />
                    </div>

                    <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

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

                    <div className="w-full text-center">
                        <p className="text-sm">{data.copy}</p>
                        {/* <p className="text-sm"> {data.message} Faiz</p> */}
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer