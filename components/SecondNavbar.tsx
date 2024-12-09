'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const hideScrollbarClass = "scrollbar-hide"

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
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
      }
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <nav className="relative border-b bg-white" aria-label="Secondary Navigation">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur-sm ${
              showLeftArrow ? 'visible' : 'invisible'
            }`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div
            ref={scrollContainerRef}
            className={`flex overflow-x-auto ${hideScrollbarClass}`}
            onScroll={() => {
              if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                setShowLeftArrow(scrollLeft > 0)
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
              }
            }}
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

          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur-sm ${
              showRightArrow ? 'visible' : 'invisible'
            }`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <style jsx>{styles}</style>
    </nav>
  )
}

export default SecondNavbar

const styles = `
  .${hideScrollbarClass} {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .${hideScrollbarClass}::-webkit-scrollbar {
    display: none;
  }
`

