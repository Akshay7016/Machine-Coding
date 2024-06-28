import { useState } from 'react'

import { AccordionDetails } from 'components/AccordionDetails/AccordionDetails'

import { accordionData } from "./accordionData"

export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <div className='max-w-[600px] mx-auto mt-12'>
            {
                accordionData.map(({ title, description }, index) => (
                    <AccordionDetails
                        title={title}
                        description={description}
                        isOpen={index === activeIndex}
                        handleAccordion={() => setActiveIndex(index === activeIndex ? null : index)}
                    />
                ))
            }
        </div>
    )
}