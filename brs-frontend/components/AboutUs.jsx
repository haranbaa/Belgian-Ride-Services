import Image from "next/image";

const AboutUs = () => {

    return (
        <>
        {/* <div>
        <Image
            src="/aboutus.jpg"
            alt="About us picture"
            height={300}
            width={}
            />
        </div> */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-5 md:px-10" style={{ paddingTop: '100px' }}>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
                        About <br/><span className="text-yellow-500">Belgian Ride Services</span>
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    Welcome to <strong>Belgian Ride Services Ltd</strong>, your premier choice for taxi and personal transportation services in Belgium. Located at Metselaarsstraat 1, bus 201, 9000 Gent, we are dedicated to offering a seamless and luxurious travel experience. Under the leadership of our esteemed manager, <strong>Waleed Ali</strong>, a holder of two master’s degrees and a certified expert in ISO 9001 standardization, we bring a wealth of experience, outstanding communication skills, and a deep understanding of quality management to our operations.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                    Our diverse team embraces a multicultural approach, reflecting Waleed Ali’s fluency in six languages, including English, Arabic, French, Italian, Turkish, and Dutch. We believe in fostering intercommunity respect and creating a welcoming environment for all passengers, regardless of background.
                    </p>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px]  shadow-lg">
                <Image
                    src="/longexposure2.avif"
                    alt="Car on the way"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                />
                </div>
            </div>
            <div className="mx-20 mt-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800 text-end">Our Mission</h1>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                At Belgian Ride Services Ltd, our mission is to redefine personal transportation by providing safe, reliable, and luxurious taxi services that respect cultural diversity, promote environmental sustainability, and prioritize customer satisfaction. We are committed to delivering exceptional experiences through our cutting-edge fleet of hybrid and electric vehicles, ensuring the utmost safety and security for our passengers while adhering to Belgian legal and insurance standards.
                </p>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default AboutUs;