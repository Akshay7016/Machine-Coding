import { BrowserRouter, Routes, Route } from "react-router-dom"

import { LandingPage } from "pages/LandingPage"
import { Accordion } from "pages/Accordion"
import { TodoList } from "pages/TodoList"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}
