'use client'

import { useState } from 'react'

const categories = [
  "ART DE LA TABLE",
  "MOBILIER",
  "NAPPAGE",
  "MATERIEL DE SALLE",
  "CUISINE",
  "BARBECUE",
  "TENTE",
  "CHAUFFAGE",
  "PODIUM - PISTE DE DANSE",
  "SON ET LUMIERE",
  "PACKS",
  "CONSOMMABLES"
]

const SecondNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("ART DE LA TABLE")

  return (
    <nav className="relative mt-5" aria-label="Secondary Navigation">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div
            className={`flex overflow-x-auto scrollbar-hide`} 
          >
            <ul className="flex space-x-6 py-4 px-4">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`whitespace-nowrap text-sm font-medium ${
                      activeCategory === category
                        ? 'text-customColor font-bold underline underline-offset-8 decoration-2'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  )
}

export default SecondNavbar
