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
                <main className="relative flex-grow py-10 px-4 md:px-10" style={{ paddingTop: '100px' }}>
                    <div className="text-center text-white mb-12">
                        <h1 className="text-6xl font-bold drop-shadow-lg text-yellow-400">CONTACT US</h1>
                    </div>
                    <ContactIntro /> {/* ContactIntro is directly under the title */}
                    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
                        <div className="w-full md:w-1/2 flex">
                            <ContactAccordion className="flex-grow" /> {/* ContactAccordion on the left */}
                        </div>
                        <div className="w-full md:w-1/2 flex">
                            <ContactForm className="flex-grow" /> {/* ContactForm on the right */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Contact;