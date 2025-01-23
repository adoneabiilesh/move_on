'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className="space-y-8 mb-10">
      {/* Carousel Section */}
      <div className="w-full">
        {/* First Slide */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="/images/4.jpg"
            alt="Eco-friendly gardening"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Sustainable Gardening Solutions
                </h1>
                <p className="text-xl text-white">
                  Shop our eco-friendly range of gardening supplies and equipment
                </p>
                <div className="flex gap-4">
                  <Link href="/category/flower-pot">
                    <Button size="lg" variant="default">
                      Shop Now
                    </Button>
                  </Link>
                  <Link href="/category/flower-pot">
                    <Button size="lg" variant="outline" className="bg-green-500 hover:bg-white">
                      View All Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Slide */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="/images/3.jpg"
            alt="Garden equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Professional Grade Tools
                </h1>
                <p className="text-xl text-white">
                  Quality equipment for every gardening enthusiast
                </p>
                <div className="flex gap-4">
                  <Link href="/category/flower-pot">
                    <Button size="lg" variant="default">
                      Shop Now
                    </Button>
                  </Link>
                  <Link href="/category/flower-pot">
                    <Button size="lg" variant="outline" className="bg-green-500 hover:bg-white">
                      View All Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section 
      <div className="container mx-auto px-4">
        <div className="relative max-w-3xl mx-auto">
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-full h-14 pl-12 pr-4 rounded-lg border-2 border-primary"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2">
            Search
          </Button>
        </div>
      </div>*/}

      {/* Category Quick Links 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-green p-4 hover:bg-green/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-gray-100 p-2.5">
                  <Image 
                    src={category.imageUrl || '/images/placeholder.jpg'} 
                    alt={category.name} 
                    width={48} 
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-black/60">{category.name}</h3>
                  <p className="text-sm text-black/60">{category.count} items</p>
                </div>
              </div>
              <span className="absolute inset-0" />
            </Link>
          ))}
        </div>
      </div>*/}
    </div>
  )
}