'use client'

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = () => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="relative bg-white border border-gray-200 rounded-md">
      {/* Top Section with Background */}
      <div
        className="relative p-2 sm:p-4"
        style={{ backgroundColor: '#FBF9F899', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
      >
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className='flex items-center gap-1 sm:gap-2 text-[8px] sm:text-xs'>
            <span className='border bg-white text-[8px] sm:text-[10px] rounded-sm font-semibold px-1 py-0.5'>Art de la table</span>
            <span className={`text-[8px] sm:text-[10px] uppercase border bg-white rounded-sm font-semibold px-1 py-0.5 ${imageHovered ? 'block' : 'hidden'}`}>
              LOT
            </span>
          </div>
        </div>

        {/* Image Container */}
        <div
          className="relative"
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
        >
          <img
            src="/image.png"
            alt="Table"
            className={`rounded-md transition-transform duration-300 ${
              imageHovered ? 'scale-105' : ''
            }`}
          />

          {imageHovered && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-1 rounded-md shadow-md bg-white w-11/12 sm:w-auto">
              {/* Quantity Label */}
              <span className="font-medium text-black text-[10px] sm:text-xs">QTÉ</span>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2 sm:space-x-20 bg-gray-100 rounded-lg p-1">
                <button className="text-gray-600 hover:text-gray-800">-</button>
                <span className="text-black font-medium text-xs sm:text-sm px-2">1</span>
                <button className="text-gray-600 hover:text-gray-800">+</button>
              </div>

              {/* Add Button */}
              <button className="bg-pink-500 text-white px-2 py-1 rounded-md font-medium text-[10px] sm:text-xs hover:bg-pink-600 transition-colors duration-300">
                Ajouter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-2 sm:mt-4 text-center px-2 sm:px-4 pb-2 sm:pb-4 text-xs sm:text-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-semibold text-sm sm:text-base">Title</p>
          <p className="text-gray-800 font-bold">0€</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-600 text-[10px] sm:text-xs">
            0.35€ / Pièce REF: VABGN5
          </p>
          <p className="text-[10px] sm:text-xs border rounded-full px-1 py-0.5" style={{ color: '#546A7D', backgroundColor: '#F1F4F6' }}>
            20 pièces
          </p>
        </div>
      </div>
    </div>
  );
};

const Article = () => {
  return (
    <div className="mt-4 sm:mt-6" style={{ backgroundColor: '#FBF9F899' }}>
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 mb-4">
        <h1 className="text-lg sm:text-xl text-gray-800 mb-2 sm:mb-0">Articles Similaires</h1>
        <p className="underline text-xs sm:text-sm">VOIR TOUTE LA COLLECTION</p>
      </div>

      {/* Grid */}
      <div className="px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Article;

