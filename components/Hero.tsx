import { Ruler } from 'lucide-react'
import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="mt-6 mx-4 sm:mx-8 md:mx-16 text-sm">
      <div className="text-xs sm:text-sm">
        Home&nbsp;&nbsp;<span className="text-slate-300">•</span>&nbsp;&nbsp;
        <span className="text-slate-400">Art de la table</span>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row lg:items-start lg:gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            className="rounded-lg mx-auto lg:mx-0 w-full h-auto"
            src="/item.png"
            alt="item"
            width={630}
            height={500}
          />
        </div>

        {/* Text and Details Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Cheese – appareil à raclette 1/2 roue
          </h1>
          {/* Price */}
          <div className="mt-2">
            <span className="font-bold text-xl sm:text-2xl">39,50€ </span>
            <span className="text-gray-400 text-base sm:text-lg">/ piece</span>
          </div>
          <hr className="my-4" />

          {/* Features */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Image src="/mesuring.png" alt="scale" width={35} height={35} />
              <span className="text-sm sm:text-base leading-none font-semibold">
                20cm
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/scale.png" alt="scale" width={35} height={35} />
              <span className="text-sm sm:text-base leading-none font-semibold">
                20cm
              </span>
            </div>
          </div>

          <hr />

          {/* Description */}
          <p className="text-xs sm:text-sm mt-2 text-gray-600">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
            <br />
            Réglable en hauteur <br />
            Appareil à raclette professionnel <br />
            Boîtier de chauffe horizontal réglable en hauteur
          </p>

          {/* Quantity Selector and Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 lg:mt-16">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
              <button className="text-gray-500 px-2 text-lg">-</button>
              <span className="text-black font-medium px-4">1</span>
              <button className="text-gray-500 px-2 text-lg">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="border text-sm w-full sm:w-auto p-3 px-8 rounded-sm text-white bg-[#5CD2DD] hover:bg-blue-400 transition-colors">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

