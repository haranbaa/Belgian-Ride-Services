import { Button } from "./ui/button";
import Link from "next/link";

const ContactIntro = () => {
    return (
        <div className="text-white mx-6 md:mx-20 text-center drop-shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Do you have a question? We’d love to help you!</h1>
            <p className="text-lg md:text-xl mb-6">
                Our customer service is here to assist you with any questions, comments, or complaints. If you need to contact the provider of your booked ride, the confirmation email contains a link to your booking.
                The driver’s contact details will be available within 24 hours of your scheduled trip. If you have additional questions, we’re happy to help via chat, email, or phone! Our customer service is available 7 days a week from 9:00 AM to 10:00 PM.
            </p>
            <div className="flex justify-center mt-5">
                <Link href="/contact/#form">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg">Contact Us!</Button>
                </Link>
            </div>
        </div>
    );
};

export default ContactIntro;
