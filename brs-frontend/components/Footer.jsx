import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black py-6">
  <div className="container mx-auto text-center text-gray-400">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      <div>
        <h3 className="text-white font-semibold">Location</h3>
        <p className="text-sm">Gent, Belgium</p>
      </div>
      
      <div>
        <h3 className="text-white font-semibold">Contact</h3>
        <a href="mailto:info@tinpet.com" className="block text-sm hover:underline hover:text-yellow-500">email@email.com</a>
        <p className="text-sm">(123) 456-7890</p>
      </div>
      
      <div>
        <h3 className="text-white font-semibold">Follow Us</h3>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com/becode.org/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-5 w-5 text-blue-600 hover:text-white" />
          </a>
          <a href="https://x.com/becodeorg" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-5 w-5 text-blue-400 hover:text-white" />
          </a>
          <a href="https://www.instagram.com/becodeorg/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-pink-500 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/company/becode.org/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-5 w-5 text-blue-700 hover:text-white" />
          </a>
        </div>
      </div>

    </div>
    
    <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>© {new Date().getFullYear()} BELGIAN RIDE SERVICE.</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;