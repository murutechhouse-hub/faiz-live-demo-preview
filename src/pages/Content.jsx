import Hero from './Hero'
import AboutMe from './AboutMe'
import Experience from "./Experience"
import Project from "./Project"
import Footer from "./Footer"
import { useEffect, useState } from 'react'

function Content() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <div>

            <Hero data={data.main} />

            <AboutMe data={data.about} />
            <Experience data={data.myExperience} />
            <Project data={data.port} />

            <Footer data={data.footer} />

        </div>
    )
}

export default Content