import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CourierServiceSection = () => {
  return (
    <section className="py-24 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <Image
                src="/delivery.jpg" // Replace with your courier service image
                alt="Courier Service"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Door-to-Door <span className="text-yellow-500 underline decoration-4 decoration-yellow-300">Courier Service</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Deliver your parcels and packages 24/7 with Belgian Ride Services. Whether it's getting a laptop back to the office, an urgent
              delivery, or a scheduled pickup, we've got you covered with fixed pricing and eco-friendly transport.
            </p>
            <ul className="space-y-4">
              {[
                '🚚 Reliable deliveries, 24/7 availability.',
                '🌍 Eco-friendly fleet for sustainable transportation.',
                '💸 Transparent, fixed pricing—no surprises.'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 border-l-4 border-yellow-500 bg-yellow-100 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-yellow-800">
                📍 This service is primarily available within Gent. For deliveries outside Gent, please contact us first to confirm availability.
              </p>
            </div>

            <a
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              Book Delivery Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourierServiceSection;
