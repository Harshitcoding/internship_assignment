import Image from "next/image"
import { Grid2X2, MoveUpLeft, Search } from 'lucide-react'

export default function InputMaterial() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-500">Suggestions</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm hover:bg-gray-50 cursor-pointer p-2">
              <div className="flex items-center gap-2 text-xs">
                <Search className="h-4 w-4 text-gray-400" />
                <span>four<strong>chettes</strong></span>
              </div>
              <span className="text-gray-400"><MoveUpLeft className="h-4 w-4"/></span>
            </div>
            <div className="flex items-center justify-between hover:bg-gray-50 cursor-pointer p-2 text-xs">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-400" />
                <span>four<strong>chette</strong> grande</span>
              </div>
              <span className="text-gray-400"><MoveUpLeft className="h-4 w-4"/></span>
            </div>
            <div className="flex items-center justify-between text-xs hover:bg-gray-50 cursor-pointer p-2">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-400" />
                <span>four<strong>chette</strong> Piranha</span>
              </div>
              <span className="text-gray-400"><MoveUpLeft className="h-4 w-4"/></span>
            </div>
            <div className="flex items-center justify-between text-xs hover:bg-gray-50 cursor-pointer p-2">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-gray-400" />
                <span>four<strong>chette</strong></span>
              </div>
              <span className="text-gray-400"><MoveUpLeft className="h-4 w-4"/></span>
            </div>
            
            <div className="flex items-center gap-2 text-xs p-2">
            <Grid2X2/>
              <div>
                <div>Fourchettes</div>
                <div className="text-xs text-gray-500">ART DE LA TABLE  FOURCHETTES</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm p-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Four<strong>chette</strong></span>
            </div>
            
            <div className="flex items-center gap-2 text-sm p-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Sport addict</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-3">
          <h2 className="text-sm font-medium text-gray-500 mb-4">Produits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="aspect-square relative bg-gray-100 rounded-lg">
                <Image
                  src="/image.png"
                  alt="Produit Simple"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-xs text-gray-500">ART DE LA TABLE</div>
                <h3 className="font-medium">Produit Simple</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-xs">7€</span>
                  <span className="text-gray-500 text-xs">/ 20 pièces</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="aspect-square relative bg-gray-100 rounded-lg">
                <Image
                  src="/spoon.png"
                  alt="Produit Gamme"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-xs text-gray-500">ART DE LA TABLE</div>
                <h3 className="font-medium">Produit Gamme</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-xs">2,20€</span>
                  <span className="text-gray-500  text-xs">/ 20 pièces</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="aspect-square relative bg-gray-100 rounded-lg">
                <Image
                  src="/fourspoons.png"
                  alt="Jewel Grand Couteau"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-xs text-gray-500">ART DE LA TABLE</div>
                <h3 className="font-medium">Jewel Grand Couteau</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-xs">7€</span>
                  <span className="text-gray-500 text-xs">/ 20 pièces</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="aspect-square relative bg-gray-100 rounded-lg">
                <Image
                  src="/plate.png"
                  alt="Piranha Fourchette à Zakouski"
                  fill
                  className="object-cover rounded-lg"
                  
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-xs text-gray-500">ART DE LA TABLE</div>
                <h3 className="font-medium">Piranha Fourchette à Zakouski</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-xs">2,20€</span>
                  <span className="text-gray-500 text-xs">/ 20 pièces</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 py-2 px-4 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Voir tous les résultats
          </button>
        </div>
      </div>
    </div>
  )
}

