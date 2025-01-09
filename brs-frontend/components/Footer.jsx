import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Services Section */}
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-4">Business Services</h3>
            <p className="text-sm">
              Providing corporate travel solutions tailored to your needs. Reliable and luxurious transportation for executives and teams.
            </p>
          </div>

          {/* Delivery Services Section */}
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-4">Delivery Services</h3>
            <p className="text-sm">
              Offering fast and eco-friendly parcel delivery across Belgium. Door-to-door service with transparent pricing.
            </p>
          </div>

          {/* Eco-Friendly Fleet Section */}
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-4">Eco-Friendly Fleet</h3>
            <p className="text-sm">
              Our fleet includes hybrid and fully electric vehicles, supporting a greener future while ensuring a luxurious ride.
            </p>
          </div>

          {/* Contact & Social Media Section */}
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Metselaarsstraat 1, bus 201, 9000 Gent</p>
            <a href="mailto:info@tinpet.com" className="block text-sm hover:underline hover:text-yellow-500">
            belgianrideservices@gmail.com
            </a>
            <a href="https://wa.me/32470612053" target="_blank" rel="noopener noreferrer" className="block text-sm hover:underline hover:text-yellow-500 mt-2">
              +32 470 61 20 53
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-center md:text-left">© {new Date().getFullYear()} BELGIAN RIDE SERVICE.</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;