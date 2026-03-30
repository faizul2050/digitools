// Banner — Hero section,

function Banner() {
  return (
    <div className="bg-gradient-to-br from-violet-50 to-violet-100 px-[5%] py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[480px]">
      
      {/* Left side — text */}
      <div>
        {/*  badge */}
        <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
          <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
          New AI Powered Tools Available
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-gray-500 text-base mb-7 max-w-md leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-violet-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 border-none cursor-pointer">
            Explore Products
          </button>
          <button className="bg-white text-gray-800 font-semibold px-7 py-3 rounded-full border border-gray-200 hover:border-violet-600 hover:text-violet-600 transition-all cursor-pointer flex items-center gap-2">
            ▶ Watch Demo
          </button>
        </div>
      </div>

      {/* Right side — image/illustration */}
      <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-2xl flex items-center justify-center min-h-[300px] relative overflow-hidden">
        <div className="text-8xl animate-bounce">🚀</div>
      </div>
    </div>
  );
}

export default Banner;