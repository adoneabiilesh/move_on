import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <ShoppingCart className="w-20 h-20 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
      <p className="text-gray-600 mb-6">Looks like you haven&apos;t added anything to your cart yet</p>
      <Link 
        href="/"
        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
