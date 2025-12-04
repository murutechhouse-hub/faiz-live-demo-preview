import Footer from "./Footer"
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const [data, setData] = useState()
    const [active, setActive] = useState("hero")

    const location = useLocation()

    useEffect(() => {
        const section = document.querySelectorAll("section")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    setActive(entry.target.id)
                }

            })
        }, { threshold: 0.6 })

        section.forEach(sec => observer.observe(sec))

        return () => observer.disconnect()

    }, [location])

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <div >

            <nav className="fixed z-50 top-4 right-0 left-0 flex flex-row justify-center ">

                <div className="flex items-center justify-center w-fit bg-primary rounded-xl px-[6px] py-[14px] shadow-sm">

                    <div >
                        <Link to="/" className="text-lg font-sans font-bold tracking-wide text-white px-4">F</Link>
                    </div>

                    <ul className="flex space-x-1  ">

                        <li >
                            <Link
                                to="/"

                                className={`${active === "/" ? "font-semibold py-3 px-4 bg-secondary rounded-xl text-primary" : "font-semibold py-4 px-4 text-secondary "}`}>
                                Home
                            </Link>
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

            <Footer data={data.footer} />
        </div>
    )
}
