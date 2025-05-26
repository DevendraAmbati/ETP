import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const DesktopHeader = () => {
  const [isUnifiedOpen, setIsUnifiedOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-sm relative z-50">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#121E44] tracking-wide">
          ETP
        </Link>

        <nav className="flex gap-6 items-center relative">
          <div
            className="relative"
            onMouseEnter={() => setIsUnifiedOpen(true)}
            onMouseLeave={() => setIsUnifiedOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-800 hover:text-[#697CFA] transition-colors font-medium"
              aria-expanded={isUnifiedOpen}
            >
              Unified Commerce
              <FaChevronDown
                className={`text-xs mt-1 ml-2 transition-transform duration-300 ${
                  isUnifiedOpen ? "-rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {["e-commerce", "omni-channel", "company", "industries", "resources", "partners"].map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className="text-gray-800 hover:text-[#697CFA] transition-colors"
            >
              {path.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <select className="px-3 py-1 text-sm border rounded">
            <option>EN</option>
            <option>FR</option>
          </select>

          <button className="px-4 py-2 rounded-full border border-[#001038] text-[#001038] flex items-center gap-2 hover:bg-[#001038] hover:text-white transition-all">
            Let’s Talk <GoArrowRight />
          </button>
        </div>
      </div>

      {isUnifiedOpen && (
        <div
          className="absolute left-0 right-0 top-full bg-white z-40 shadow-lg pt-10 px-10 xl:px-20 pb-6 text-gray-700"
          onMouseEnter={() => setIsUnifiedOpen(true)}
          onMouseLeave={() => setIsUnifiedOpen(false)}
        >
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 space-y-4">
              <h1 className="text-xl font-semibold text-[#121E44]">Unified Commerce</h1>
              <p className="text-sm">
                ETP Unify is a powerful cloud-native Unified Commerce Retail Solution. Built using MACH Architecture,
                it brings the best of Retail and e-commerce functionality to the user in one, easy to use, and beautiful interface.
              </p>
            </div>
            <div className="flex justify-end items-start">
              <Link to="/" className="font-semibold underline text-sm text-blue-600 hover:text-blue-800">
                Explore All Features
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Features</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["cloud-pos", "Cloud POS & Retail Operations"],
                  ["smart-order", "Smart Order Management"],
                  ["omni-fulfillment", "Omni-Channel Fulfillment"],
                  ["inventory", "Unified Inventory Management"],
                  ["promotions", "Unified Promotions Management"],
                  ["crm", "Customer Relationship Management"],
                  ["marketplaces", "Marketplaces & E-commerce"],
                ].map(([path, label]) => (
                  <li key={path}>
                    <Link to={`/${path}`} className="hover:text-blue-600 transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-transparent">.</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["product-info", "Product Info Management"],
                  ["api", "API Management"],
                  ["integration", "Seamless Integration"],
                  ["ai", "Artificial Intelligence"],
                  ["logistics", "Logistics Management"],
                  ["mobile", "Mobile Applications"],
                ].map(([path, label]) => (
                  <li key={path}>
                    <Link to={`/${path}`} className="hover:text-blue-600 transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l pl-6 border-gray-200">
              <p className="font-medium mb-4">What's New</p>
              <div className="space-y-4">
                {[1, 2].map((_, index) => (
                  <img
                    key={index}
                    src="https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
                    alt="news"
                    className="w-full h-40 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default DesktopHeader;
