import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "../pages/Layout"
import NoPages from "../pages/NoPages"
import Content from "../pages/Content"
import ProjectOne from "../pages/Project1"
import { useEffect, useState } from "react"


function AppRouter() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}port.json`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    if (!data) return null

    return (
        <BrowserRouter >
            <Routes>
                <Route path="/faiz-live-demo-preview//" element={<Layout />}>

                    <Route index element={<Content />} />

                    <Route path="project-one" element={<ProjectOne data={data.portDetail} />} />



                    <Route path="*" element={<NoPages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter