import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import ScrollToTop from "../components/ScrollToTop"

import Layout from "../pages/Layout"
import NoPages from "../pages/NoPages"
import Content from "../pages/Content"
import ProjectOne from "../pages/Project1"
import ProjectTwo from "../pages/Project2"
import Project2Page2 from "../pages/Project2Page2"
import Project2Page21 from "../pages/Project2Page21"


function AppRouter() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <BrowserRouter basename="/faiz-live-demo-preview/">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Content />} />

                    <Route path="project-one" element={<ProjectOne data={data.portDetail1} />} />
                    <Route path="project-two" element={<ProjectTwo data={data.portDetail2} />} />

                    <Route path="project-false" element={<Project2Page2 data={data.project2p2} />} />
                    <Route path="project-heuristic" element={<Project2Page21 data={data.project2p21} />} />

                    <Route path="*" element={<NoPages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter