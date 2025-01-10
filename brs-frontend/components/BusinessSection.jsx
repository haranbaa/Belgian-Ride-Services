import { ArrowRight, Briefcase, Building, Utensils, Heart } from 'lucide-react';
import Image from 'next/image';

const businessServices = [
  { icon: Briefcase, text: 'Corporate travel' },
  { icon: Building, text: 'Small business' },
  { icon: Utensils, text: 'Hospitality services' },
  { icon: Heart, text: 'Healthcare support' },
];

const BusinessSection = () => {
  return (
    <section className="py-24 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Taking care of <span className="text-yellow-500">business</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
            As a startup taxi agency, we are dedicated to providing exceptional service for all your transportation needs. Whether it's corporate travel, hospitality, or healthcare support, we're here for you
            </p>
            <ul className="space-y-6">
              {businessServices.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="bg-yellow-100 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Taxi driving.jpg"
                alt="Business Travel"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
