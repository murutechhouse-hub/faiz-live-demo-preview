

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const [active, setActive] = useState("hero")
    const location = useLocation()

    useEffect(() => {
        const section = document.querySelectorAll("section")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if(entry.isIntersecting){
                    setActive(entry.target.id)
                }

            })
        }, {threshold : 0.6})

        section.forEach(sec => observer.observe(sec))

        return () => observer.disconnect()

    },[location])

    return (
        <div >

            <nav className="fixed z-50 top-4 right-0 left-0 flex flex-row justify-center ">

                <div className="flex items-center justify-center w-fit bg-primary rounded-xl px-[6px] py-[14px] shadow-sm">

                    <div >
                        <a href="#hero" className="text-lg font-sans font-bold tracking-wide text-white px-4">F</a>
                    </div>

                    <ul className="flex space-x-1  ">

                        <li >
                            <a
                                href="#hero"

                                className={`${active === "hero" ? "font-semibold py-3 px-4 bg-secondary rounded-xl text-primary" : "font-semibold py-4 px-4 text-secondary "}`}>
                                Home
                            </a>
                            <a
                                href="#about"

                                className={`${active === "about" ? "font-semibold py-3 px-4 bg-secondary rounded-xl text-primary" : "font-semibold py-4 px-4 text-secondary "}`}>
                                About
                            </a>
                            <a
                                href="#project"

                                className={`${active === "project" ? "font-semibold py-3 px-4 bg-secondary rounded-xl text-primary" : "font-semibold py-4 px-4 text-secondary "}`}>
                                Project
                            </a>

                        </li>

                    </ul>




                </div>

            </nav>

            <Outlet />

        </div>
    )
}
