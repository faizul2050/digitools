function CTA() {
  return (
    <div className="bg-gradient-to-br from-violet-600 to-violet-800 text-center py-20 px-[5%]">
      <h2 className="text-4xl font-extrabold text-white mb-3">Ready To Transform Your Workflow?</h2>
      <p className="text-violet-200 mb-8">Join thousands of professionals using DigiTools to work smarter.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-violet-600 font-semibold px-7 py-3 rounded-full hover:bg-violet-50 transition-colors border-none cursor-pointer">
          Explore Products
        </button>
        <button className="border border-white/50 text-white font-semibold px-7 py-3 rounded-full hover:border-white hover:bg-white/10 transition-colors bg-transparent cursor-pointer">
          View Pricing
        </button>
      </div>
      <p className="mt-5 text-violet-300 text-xs">14-day free trial · No credit card required · Cancel anytime</p>
    </div>
  );
}

export default CTA;