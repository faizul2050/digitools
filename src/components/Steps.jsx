//Steps — Shows the 3 steps to get started

const steps = [
  { num: "01", icon: "👤", title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started." },
  { num: "02", icon: "📦", title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs." },
  { num: "03", icon: "🚀", title: "Start Creating", desc: "Download and start using your premium tools immediately." },
];

function Steps() {
  return (
    <section className="bg-violet-50 py-20 px-[5%]">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">Get Started In 3 Steps</h2>
      <p className="text-center text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="text-center relative p-8">
            {/* Background Watermark Number*/}
            <span className="absolute top-2 right-6 text-5xl font-extrabold text-gray-200 leading-none">
              {step.num}
            </span>
            {/* Circle icon */}
            <div className="w-18 h-18 w-[72px] h-[72px] bg-gradient-to-br from-violet-100 to-violet-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg shadow-violet-100">
              {step.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;