import { BrowserRouter, Routes, Route } from "react-router-dom"

import { LandingPage } from "pages/LandingPage"
import { Accordion } from "pages/Accordion"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  )
}
