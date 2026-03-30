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
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        
        {/* Brand & Socials */}
        <div className="md:col-span-2">
          <div className="text-white font-extrabold text-2xl mb-4 tracking-tight">DigiTools</div>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our AI-driven assets and templates.
          </p>
          
          {/* Social Icons added here */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
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
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
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
    </footer>
  );
}

export default Footer;