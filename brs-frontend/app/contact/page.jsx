import ContactAccordion from "@/components/ContactAccordion";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import ContactIntro from "@/components/ContactIntro";

const Contact = () => {
    return (
        <>
            <div className="min-h-screen relative bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/taxi.jpg"
                        alt="Taxi Service"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <main className="flex-grow py-10 px-4 md:px-10" style={{ paddingTop: '100px' }}>
                    <div className="text-center text-white mb-12">
                        <h1 className="text-4xl font-bold drop-shadow-lg text-yellow-400">Get in Touch with Us</h1>
                    </div>
                    <ContactIntro />
                    <div className="flex flex-col space-y-10">
                        <ContactAccordion />
                        <ContactForm />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Contact;
