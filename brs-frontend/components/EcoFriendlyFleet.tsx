import Image from 'next/image'
import { ArrowRight, Leaf } from 'lucide-react'

const vehicles = [
  {
    name: 'Hybrid Vehicle',
    description: 'A modern hybrid car designed to reduce emissions while maintaining luxury and reliability.',
    image: '/Mercedes-Benz .jpg',
  },
  {
    name: 'VW ID.5',
    description: 'The cutting-edge VW ID.5 offers zero-emission travel with luxury and efficiency.',
    image: '/Volkswagen-ID5-.jpg',
  },
  {
    name: 'MG5 Electric',
    description: 'The MG5 offers an all-electric experience with sleek design and exceptional performance.',
    image: '/MG5 Electric.jpg',
  },
]

const EcoFriendlyFleet = () => {
  return (
    <section className="py-24 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our <span className="text-yellow-500">Eco-Friendly</span> Fleet
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Belgian Ride Services, we're committed to reducing our environmental impact with our eco-friendly fleet. 
            Experience the future of sustainable travel today.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Leaf className="absolute bottom-4 right-4 w-8 h-8 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {vehicle.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
     
        </div>
      </div>
    </section>
  )
}

export default EcoFriendlyFleet