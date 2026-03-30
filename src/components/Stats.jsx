// Stats — Displays three key metrics/numbers

function Stats() {
  return (
    <div className="bg-violet-600 px-[5%] py-9 grid grid-cols-3 text-center">
      <div>
        <div className="text-4xl font-extrabold text-white">50K+</div>
        <div className="text-violet-200 text-sm mt-1">Active Users</div>
      </div>
      <div className="border-l border-violet-400">
        <div className="text-4xl font-extrabold text-white">200+</div>
        <div className="text-violet-200 text-sm mt-1">Premium Tools</div>
      </div>
      <div className="border-l border-violet-400">
        <div className="text-4xl font-extrabold text-white">4.9</div>
        <div className="text-violet-200 text-sm mt-1">Rating</div>
      </div>
    </div>
  );
}

export default Stats;