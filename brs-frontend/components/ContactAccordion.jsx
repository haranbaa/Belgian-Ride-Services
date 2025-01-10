import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from 'next/image';

const ContactAccordion = ({ className }) => {
    return (
        <div className={`max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-6 ${className}`}>
            <h1 className="text-center font-bold text-2xl mb-6  hover:text-yellow-700  bg-yellow-500 bg-opacity-50 p-4 rounded-lg mx-4 md:mx-20">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-md font-semibold text-gray-900"> 
                        How can I book a ride?
                    </AccordionTrigger>
                    <AccordionContent className="text-md text-gray-700 italic">
                        You can contact us on WhatsApp at this number:{" "}
                        <a
                            href="https://wa.me/32470612053"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold hover:underline text-green-700 hover:text-yellow-500"
                        >
                            +32 470 61 20 53
                        </a>{" "}
                        or by filling in the form{" "}
                        <Link href="/booking" className="text-md font-semibold text-blue-500 hover:underline hover:text-yellow-500">
                            here
                        </Link>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-md font-semibold text-gray-900">    
                        What are your service areas?
                    </AccordionTrigger>
                    <AccordionContent className="text-md text-gray-700 italic">Whole Belgium.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-md font-semibold text-gray-900">    
                        What are your rates and payment options?
                    </AccordionTrigger>
                    <AccordionContent  className="text-md text-gray-700 italic">We accept all kinds of Cash, Digital and Electronic payment solutions or simply pay with a QR code in the car. <Image src="/payment.png" alt="payment icon"  width={400} height={400} /></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-md font-semibold text-gray-900">    
                        Do you offer airport pickup and drop-off services?
                    </AccordionTrigger>
                    <AccordionContent className="text-md text-gray-700 italic">Yes .</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-md font-semibold text-gray-900">    
                        Do you offer door to door delivery in whole Belgium?
                    </AccordionTrigger>
                    <AccordionContent className="text-md text-gray-700 italic">We offer door to door delivery especially in <strong>Gent</strong> city, but if it's outside of Gent please call us to arrange it .</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-md font-semibold text-gray-900">    
                        How much time does it take to deliver a package?
                    </AccordionTrigger>
                    <AccordionContent className="text-md text-gray-700 italic">We try our best to delivery the package as soon as possible. Once we receive it we go ahead and deliver it.  .</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ContactAccordion;