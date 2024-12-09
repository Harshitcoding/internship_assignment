import Image from 'next/image'

export default function Packaging() {
  const services = [
    {
      imageSrc: "/delivery.png", // Replace with actual image paths
      title: "Livraison & Reprise",
      description: "Selon vos besoins"
    },
    {
      imageSrc: "/dinner.png",
      title: "Nettoyage",
      description: "Selon vos besoins"
    },
    {
      imageSrc: "/cart.png",
      title: "Commande Illimitée",
      description: "Tout est possible"
    },
    {
      imageSrc: "/bus.png",
      title: "Transport & Enlèvement",
      description: "On s'occupe de tout"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-t from-[#FFFFFF] bg-pink-50 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-medium mb-2">
          On s'occupe de <span className="text-[#40E0D0]">tout</span>
        </h2>
        <p className="text-gray-600">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              lastItem={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceItemProps {
  imageSrc: string;
  title: string;
  description: string;
  lastItem?: boolean;
}

function ServiceItem({ imageSrc, title, description, lastItem = false }: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-16 h-16 mb-6 flex items-center justify-center relative z-10 ">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={48} 
          height={48} 
          className="text-[#6F4E77]"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {!lastItem && (
        <div className="hidden lg:block absolute left-1/2 top-8 w-full h-px bg-gray-300" />
      )}
    </div>
  )
}
