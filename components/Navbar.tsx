'use client'

import { Heart, Lightbulb, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import InputMaterial from "@/components/InputMaterial"

export default function Navbar() {
  const [showInputMaterial, setShowInputMaterial] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputFocus = () => {
    setShowInputMaterial(true)
  }

  const handleInputBlur = () => {
    setTimeout(() => setShowInputMaterial(false), 100)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="border-b bg-white mt-4">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="w-32">
            <Image src="/logo.png" alt="logo" width={400} height={400} className="h-14 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-2xl mr-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="h-10 w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-800 placeholder:text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                />
                {showInputMaterial && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-md border border-gray-100 bg-white shadow-lg">
                    <InputMaterial />
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Items */}
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Lightbulb className="h-5 w-5" />
              <span className="hidden xl:inline">Inspirations</span>
            </button>
            
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Heart className="h-5 w-5" />
              <span className="hidden xl:inline">Mes favoris</span>
              <span className="flex h-5 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-medium">
                24
              </span>
            </button>
            
            <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Panier</span>
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <button className="flex items-center gap-1 text-sm text-gray-700">
              <span>FR</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Rechercher un produit"
                className="h-10 w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-800 placeholder:text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0"
              />
            </div>
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <Lightbulb className="h-5 w-5" />
              Inspirations
            </button>
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <Heart className="h-5 w-5" />
              Mes favoris
              <span className="ml-auto flex h-5 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-medium">
                24
              </span>
            </button>
            <Button className="flex w-full items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600">
              <ShoppingCart className="h-4 w-4" />
              Panier
            </Button>
            <div className="flex items-center justify-between px-3 py-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <button className="flex items-center gap-1 text-sm text-gray-700">
                <span>FR</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

