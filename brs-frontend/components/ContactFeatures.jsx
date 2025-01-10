import { MapPinHouse, PhoneCall, Mail, Clock } from 'lucide-react';

const features = [
    {
      icon: MapPinHouse,
      title: 'Metselaarsstraat 1, 9000 Gent',
    },
    {
      icon: PhoneCall,
      title: '+32 470 61 20 53',
    },
    {
      icon: Mail,
      title: 'belgianrideservices@gmail.com',
    },
    {
      icon: Clock,
      title: 'Mon to Sun - 24h',
    },
  ]

  const ContactFeatures = () => {

    return (
     <section className='text-white'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-yellow-400 p-5 rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300 relative">
                <feature.icon className="w-12 h-12 text-gray-900" />
                <div className="absolute inset-0 bg-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <feature.icon className="w-12 h-12 text-gray-900 absolute inset-0 m-auto transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  }

  export default ContactFeatures;