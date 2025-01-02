import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactAccordion = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-9 mt-12">
            <h1 className="text-center font-bold text-2xl mb-6">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        How can I book a ride?
                    </AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>    
                        What are your service areas?
                    </AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>    
                        What are your rates and payment options?
                    </AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>    
                        Do you offer airport pickup and drop-off services?
                    </AccordionTrigger>
                    <AccordionContent>Blablablabla.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ContactAccordion;
