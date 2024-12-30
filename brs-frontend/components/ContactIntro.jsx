import { Button } from "./ui/button";
import Link from "next/link";

const ContactIntro = () => {

    return (
        <>
        <div className="bg-white">
            <h1>Do you have a question? <br/>We would like to help you!</h1>
            <p>The customer service of sneleentaxi is here to help you if you have questions, comments or a complaint. If you need to get in touch with the provider of your booked ride, the confirmation email contains a link to your booking. The driver's contact details will be visible within 24 hours of your scheduled trip.
            Is your question still unanswered in our frequently asked questions? We are here to help you via chat, e-mail or by phone! Our customer service is available 7 days a week from 9:00 to 22:00.</p>
            <Link href="/contact/#form"><Button>Contact us!</Button></Link>
        </div>
        </>
    )
}

export default ContactIntro;