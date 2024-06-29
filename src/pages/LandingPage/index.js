import { useNavigate } from "react-router-dom"

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='text-2xl cursor-pointer' onClick={() => navigate("/accordion")}>
                1. Accordion
            </div>
            <div className='text-2xl cursor-pointer' onClick={() => navigate("/todo-list")}>
                2. Todo List
            </div>
        </>
    )
}
