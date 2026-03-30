import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const cols = [
  { head: "Product", links: ["Features", "About", "Pricing", "Templates", "Integrations"] },
  { head: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { head: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] },
];

const socialLinks = [
  { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61571069686832", label: "Facebook" },
  { icon: <FaTwitter />, url: "#", label: "Twitter" },
  { icon: <FaInstagram />, url: "#", label: "Instagram" },
  { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/faizul2050", label: "GitHub" },
];

function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 pt-16 pb-8 px-[5%] overflow-hidden">
      
      {/* --- StackBlitz Style Left-Side Animation --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30">
        {/* Floating Code Elements on the Left */}
        <div className="absolute top-10 left-[2%] w-[350px] animate-[float_8s_ease-in-out_infinite]">
          <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-5 backdrop-blur-sm shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-[90%] bg-violet-500/20 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-violet-500/40 animate-[loading_2s_infinite]"></div>
              </div>
              <div className="h-1.5 w-[70%] bg-blue-500/20 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-500/40 animate-[loading_3s_infinite]"></div>
              </div>
              <div className="h-1.5 w-[85%] bg-gray-800 rounded-full"></div>
              <div className="h-1.5 w-[40%] bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Technological Grid Lines behind text */}
          <div className="absolute -top-10 -left-10 w-64 h-64 border-l border-t border-gray-800/50 rounded-tl-3xl"></div>
          <div className="absolute top-20 left-20 w-32 h-32 border-b border-r border-violet-900/30 rounded-br-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        
        {/* Brand & Socials - content is now on top of the animation */}
        <div className="md:col-span-2">
          <div className="text-white font-extrabold text-2xl mb-4 tracking-tight">DigiTools</div>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our AI-driven assets and templates.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-800"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {cols.map((col) => (
          <div key={col.head}>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{col.head}</h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-violet-400 transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs font-medium">
          © {new Date().getFullYear()} <span className="text-white">Faizul Amin</span>. All rights reserved.
        </span>
        
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
            <a key={l} href="#" className="text-[11px] font-medium text-gray-500 hover:text-white no-underline transition-colors uppercase tracking-widest">
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;