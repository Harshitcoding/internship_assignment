'use client'
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  reference: string;
  quantity: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div
        className={`bg-gray-50 border rounded-lg p-3 mb-4 relative transition-all duration-300 ${
          imageHovered ? 'shadow-lg' : ''
        }`}
        style={{backgroundColor:"#FBF9F899"}}
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <div className="flex justify-between items-start mb-2">
          <Button variant="ghost" size="icon" className="w-7 h-7">
            <Heart className="w-5 h-5" />
          </Button>
          <div className='flex items-center gap-2 text-xs'>
            <span className='border bg-white text-[10px] rounded-sm px-1'>Art de la table</span>
            <span className={`text-[10px] uppercase border bg-white rounded-sm px-1 ${imageHovered ? 'block' : 'hidden'}`}>LOT</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className={`max-w-full h-auto transition-transform duration-300 ${
              imageHovered ? 'scale-105' : ''
            }`}
          />
        </div>

        {imageHovered && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-1 rounded-md shadow-md bg-white w-[calc(100%-1rem)] max-w-xs">
            <span className="font-medium text-black text-xs">QTÉ</span>
            <div className="flex items-center space-x-4 sm:space-x-8 bg-gray-100 gap-2 sm:gap-8 rounded-lg p-1">
              <button className="text-gray-600 hover:bg-gray-200 px-2 rounded">-</button>
              <span className="text-black font-medium text-sm">1</span>
              <button className="text-gray-600 hover:bg-gray-200 px-2 rounded">+</button>
            </div>
            <button className="bg-pink-500 text-white px-2 py-1 rounded-md font-medium text-xs hover:bg-pink-600 transition-colors duration-300">
              Ajouter
            </button>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-md font-medium truncate max-w-[70%]">{product.title}</h3>
          <span className="text-md font-medium">0€</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="text-sm truncate max-w-[70%]">{product.price} REF :{product.reference}</span>
          <span className="border bg-gray-300 rounded-full px-2">{product.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default function SecondColumn() {
  const products: Product[] = [
    {
      id: 1,
      title: "Title",
      price: "0,35€/Pièce",
      reference: "VABGN5",
      quantity: "20 pièces",
      image: "/image.png"
    },
    {
      id: 2,
      title: "Title",
      price: "0,35€/Pièce",
      reference: "VABGN5",
      quantity: "20 pièces",
      image: "/image.png"
    },
    {
      id: 3,
      title: "Title",
      price: "0,35€/Pièce",
      reference: "VABGN5",
      quantity: "20 pièces",
      image: "/image.png"
    }
  ];

  return (
    <div className="w-full px-4 py-6 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-0 sm:ml-7">
          Ces produits pourraient vous intéresser
        </h2>
        <Button variant="link" className="text-gray-900 font-medium underline sm:mr-7">
          VOIR TOUTE LA COLLECTION
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}