import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "../pages/Layout"
import NoPages from "../pages/NoPages"
import Content from "../pages/Content"
import ProjectOne from "../pages/ProjectOne"


function AppRouter() {


    return (
        <BrowserRouter >
            <Routes>
                <Route path="/faiz-review/" element={<Layout />}>

                    <Route index element={<Content />} />

                    <Route path="project-one" element={<ProjectOne />} />



                    <Route path="*" element={<NoPages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter