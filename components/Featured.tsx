"use client"

import Image from "next/image"
import Link from "next/link"

export function FeaturedCategories() {
  return (
    <div>
      {/* Scrolling banner */}
      <div className="bg-[#2E7D32] text-white py-3 whitespace-nowrap overflow-hidden relative">
        <div className="animate-marquee inline-block">
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
        </div>
        <div className="absolute top-0 animate-marquee2 inline-block">
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
          <span className="inline-flex items-center mx-4">
            WE EXIST TO HELP YOU GROW
            <span className="inline-block w-4 h-4 ml-2">🌱</span>
          </span>
        </div>
      </div>

      {/* Featured categories grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* New Arrivals */}
          <Link 
            href="/category/plastic-pot" 
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/2.webp"
                alt="New Arrivals"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">New Arrivals</h3>
                <button className="bg-white text-[#2E7D32] px-6 py-2 rounded-full w-fit hover:bg-[#4CAF50] hover:text-white transition-colors">
                  Know More
                </button>
              </div>
            </div>
          </Link>

          {/* Grow Bags */}
          <Link 
            href="category/flower-pot" 
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/1.webp"
                alt="Grow Bags"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Grow Bags</h3>
                <button className="bg-white text-[#2E7D32] px-6 py-2 rounded-full w-fit hover:bg-[#4CAF50] hover:text-white transition-colors">
                  Know More
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
