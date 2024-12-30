import { ShieldCheck, Car, Globe, Users, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Safety and Reliability',
    description: 'We prioritize your safety with experienced drivers and fully insured vehicles, compliant with Belgian legal standards.',
  },
  {
    icon: Car,
    title: 'Diverse and Luxurious Fleet',
    description: 'Choose from hybrid, electric, and wheelchair-accessible vehicles designed to meet your every need.',
  },
  {
    icon: Globe,
    title: 'Sustainability at Heart',
    description: 'Our fleet includes eco-friendly hybrid and electric vehicles, supporting a greener future.',
  },
  {
    icon: Users,
    title: 'Professional and Inclusive Service',
    description: 'Our multilingual team ensures a premium experience tailored to diverse cultural needs.',
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-yellow-500">Belgian Ride Services</span>?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We redefine taxi services with luxurious, reliable, and eco-friendly transportation, 
            designed to ensure your satisfaction every step of the way.
          </p>
        </div>

        {/* Feature Grid */}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
          >
            Book Your Ride
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
