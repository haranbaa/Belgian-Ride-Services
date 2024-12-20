import ContactAccordion from "@/components/ContactAccordion";
import ContactForm from "@/components/ContactForm";
const Contact = () => {

    return (
        <>
        <h1>Contact Us</h1>
        <div className="flex flex-row">
            <div>
                <ContactAccordion />
            </div>
            <div>
                <ContactForm />
            </div>           
        </div>
        </>
    )
}
export default Contact;