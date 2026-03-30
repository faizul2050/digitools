import { useState } from "react";

// tagColor — Defines the background and text colors for product tags
const tagColor = {
  "popular": "bg-violet-100 text-violet-700",
  "new": "bg-green-100 text-green-700",
  "best-seller": "bg-yellow-100 text-yellow-700",
};

function ProductCard({ product, onBuy }) {
  // added — Local state to toggle button text after clicking buy
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    onBuy(product);           // Calls the parent function to add item to cart
    setAdded(true);           // Changes button appearance to 'Added'
    setTimeout(() => setAdded(false), 2000); // Reverts button text after 2 seconds
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-100 hover:-translate-y-1 transition-all duration-300">
      
      {/* Top section: Icon and Tag */}
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
          {product.icon}
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${tagColor[product.tagType]}`}>
          {product.tag}
        </span>
      </div>

      {/* Name and Description */}
      <div className="font-bold text-gray-900 text-base">{product.name}</div>
      <div className="text-gray-500 text-sm leading-relaxed">{product.description}</div>

      {/* Price Section */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm">/{product.period}</span>
      </div>

      {/* Features List */}
      <ul className="flex flex-col gap-1.5 mt-1">
        {product.features.map((f, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-violet-600 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        className={`mt-auto py-3 rounded-full font-semibold text-sm text-white transition-all border-none cursor-pointer ${
          added ? "bg-green-500" : "bg-violet-600 hover:bg-violet-700"
        }`}
      >
        {added ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;