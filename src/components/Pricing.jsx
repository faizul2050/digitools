// Pricing — 3 plan See

const plans = [
  {
    name: "Starter", tag: "Perfect for getting started", price: 0,
    features: ["Access to 12 free tools", "Basic templates", "Community support", "1 project per month"],
    btn: "Get Started Free", featured: false,
  },
  {
    name: "Pro", tag: "Ideal for professionals", price: 29, badge: "Most Popular",
    features: ["Access to all premium tools", "Unlimited collaboration", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    btn: "Start Pro Trial", featured: true,
  },
  {
    name: "Enterprise", tag: "For teams and businesses", price: 99,
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    btn: "Contact Sales", featured: false,
  },
];

function Pricing() {
  return (
    <section className="py-20 px-[5%]">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">Simple, Transparent Pricing</h2>
      <p className="text-center text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-8 relative transition-all duration-300 ${
              plan.featured
                ? "bg-violet-600 border-violet-600 text-white scale-105 shadow-2xl shadow-violet-200"
                : "bg-white border-gray-200 hover:border-violet-300 hover:shadow-lg"
            }`}
          >
            {/* Popular badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            <div className={`font-extrabold text-xl mb-1 ${plan.featured ? "text-white" : "text-gray-900"}`}>
              {plan.name}
            </div>
            <div className={`text-sm mb-5 ${plan.featured ? "text-violet-200" : "text-gray-400"}`}>
              {plan.tag}
            </div>
            <div className={`text-5xl font-extrabold mb-1 ${plan.featured ? "text-white" : "text-gray-900"}`}>
              ${plan.price}
              <span className={`text-base font-medium ${plan.featured ? "text-violet-200" : "text-gray-400"}`}>/Month</span>
            </div>

            <ul className="my-6 flex flex-col gap-2">
              {plan.features.map((f, i) => (
                <li key={i} className={`text-sm flex items-center gap-2 ${plan.featured ? "text-violet-100" : "text-gray-600"}`}>
                  <span className={`font-bold ${plan.featured ? "text-white" : "text-violet-600"}`}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all cursor-pointer border-none ${
              plan.featured
                ? "bg-white text-violet-600 hover:bg-violet-50"
                : "border border-violet-600 text-violet-600 bg-transparent hover:bg-violet-600 hover:text-white"
            }`}>
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;