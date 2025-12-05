import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { RiWhatsappFill } from 'react-icons/ri'

import ButtonIcon from "../components/Button/IconButton/IconButton"
import Button from "../components/Button/PrimaryButton/PrimaryButton"
import PrimarySection from "../components/Button/PrimaryButton/PrimarySection"

function Footer({ data }) {

    if (!data) return null


    return (
        <footer className="pt-12 bg-background">
            <div className="pt-4 pb-4  ">

                <div className="flex flex-col items-center justify-center mx-8 lg:mx-10  ">

                    <div className="text-center mb-5">
                        <h1 className="text-xl"> Interested in working together? </h1>
                    </div>

                    <div className="flex items-center justify-center mb-10 ">
                        <PrimarySection click="#about" lable="Let's Build It" />
                    </div>

                    <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

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

                    <div className="w-full text-center">
                        <p className="text-sm">{data.copy}</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer