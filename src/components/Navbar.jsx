// Navbar ,

function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 px-[5%] h-16 flex items-center justify-between">
      
      {/* Logo */}
      <div className="font-extrabold text-2xl text-violet-600 tracking-tight">
        DigiTools
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-7 list-none">
        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-500 text-sm font-medium hover:text-violet-600 no-underline transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-700 hover:text-violet-600 bg-transparent border-none cursor-pointer">
          Login
        </button>
        <button className="bg-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-violet-700 transition-colors border-none cursor-pointer">
          Get Started
        </button>

        {/* Cart Button — cartCount prop থেকে সংখ্যা দেখায় */}
        <button className="relative flex items-center gap-2 text-sm border border-gray-200 rounded-full px-4 py-2 hover:border-violet-600 hover:text-violet-600 transition-colors bg-white cursor-pointer">
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;