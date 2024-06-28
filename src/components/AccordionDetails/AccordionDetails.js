export const AccordionDetails = ({ title, description, isOpen, handleAccordion }) => (
    <div>
        <div onClick={handleAccordion} className="flex justify-between items-center py-4 px-8 border">
            <span className="font-semibold">{title}</span>
            <span>{isOpen ? '▲' : '▼'}</span>
        </div>
        {
            isOpen && <p className="py-2 px-8 border">{description}</p>
        }
    </div>
);

