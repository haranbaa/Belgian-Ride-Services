import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const ContactAccordion = () => {
    return (
        <div>
               <Accordion>
                 <AccordionItem value="item-1">
                    <AccordionTrigger>How can I book a ride?</AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are your service areas?</AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are your rates and payments options?</AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Do you offer airport pickup and drop-off services?</AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Are you available 24/7?</AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ContactAccordion;