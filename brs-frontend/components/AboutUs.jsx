import Image from "next/image";

const AboutUs = () => {

    return (
        <>
        <section id="about-us" className=" relative py-10 md:py-20 overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-5 md:px-10">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
                        ABOUT US
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700 mb-5">
                        At <strong>Belgian Ride Services</strong>, we make transportation
                        stress-free and reliable. Whether you're planning a trip to the airport
                        next week or securing a ride to your favorite restaurant tomorrow,
                        we've got you covered.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our mission is to provide guaranteed, on-time rides for every occasion.
                        With our easy booking system, you can schedule your transportation in
                        advance and enjoy peace of mind knowing your plans are set. Let us take
                        care of the journey, so you can focus on your destination. 🌟
                    </p>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px]  shadow-lg">
                <Image
                    src="/longexposure2.avif"
                    alt="Car on the way"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutUs;