import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const DesktopHeader = () => {
  const [isUnifiedOpen, setIsUnifiedOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-sm relative z-50">
      <div className="container z-50 mx-auto px-10 py-3 flex justify-between items-center w-[1440px]">
        <Link to="/" className="text-xl font-bold text-gray-800">
          ETP
        </Link>
        <nav className="flex gap-6 items-center relative z-50">
          <div
            className="relative"
            onMouseEnter={() => setIsUnifiedOpen(true)}
            onMouseLeave={() => setIsUnifiedOpen(false)}
          >
            <button className="flex items-center justify-center gap-1 text-gray-800 hover:text-blue-600 hover:font-medium">
              <p>Unified Commerce </p>
              <FaChevronDown
                className={`text-xs mt-1 ml-2 transition-transform duration-400 ${
                  isUnifiedOpen ? "-rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <Link to="/e-commerce" className="hover:text-blue-600 ">
            e-Commerce
          </Link>
          <Link to="/omni-channel" className="hover:text-blue-600">
            Omni Channel
          </Link>
          <Link to="/company" className="hover:text-blue-600">
            Company
          </Link>
          <Link to="/industries" className="hover:text-blue-600">
            Industries
          </Link>
          <Link to="/resources" className="hover:text-blue-600">
            Resources
          </Link>
          <Link to="/partners" className="hover:text-blue-600">
            Partners
          </Link>
        </nav>

        <button className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          Let’s Talk
        </button>
      </div>

      {isUnifiedOpen && (
        <div
          className="fixed left-0 right-0 top-[40px] z-40 bg-white  pt-10 shadow-xl px-10 xl:px-20 pb-6 grid grid-cols-3 gap-5   text-gray-700"
          onMouseEnter={() => setIsUnifiedOpen(true)}
          onMouseLeave={() => setIsUnifiedOpen(false)}
        >
          <div className="col-span-3  grid grid-cols-3 ">
            <div className=" col-span-2">
              <h1>Unified Commerce</h1>
              <p className="pt-8">
                {" "}
                ETP Unify is a powerful cloud-native Unified Commerce Retail
                Solution. Built using MACH Architecture, it brings the best of
                Retail and e-commerce functionality to the user in one, easy to
                use, and beautiful interface.{" "}
              </p>
            </div>
            <div className="col-span-1 flex justify-end">
              <button className="font-bold underline ">
                {" "}
                Explore All Features
              </button>
            </div>
          </div>
          <div className="col-span-3 ">
            <hr className=" border-t-[1px] border-gray-100" />
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Features</h4>
            <ul className="space-y-6">
              <li>
                <Link to="/cloud-pos" className="hover:text-blue-600">
                  Cloud POS & Retail Operations
                </Link>
              </li>
              <li>
                <Link to="/smart-order" className="hover:text-blue-600">
                  Smart Order Management
                </Link>
              </li>
              <li>
                <Link to="/omni-fulfillment" className="hover:text-blue-600">
                  Omni-Channel Fulfillment
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="hover:text-blue-600">
                  Unified Inventory Management
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-blue-600">
                  Unified Promotions Management
                </Link>
              </li>
              <li>
                <Link to="/crm" className="hover:text-blue-600">
                  Customer Relationship Management
                </Link>
              </li>
              <li>
                <Link to="/marketplaces" className="hover:text-blue-600">
                  Marketplaces & E-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 invisible">.</h4>
            <ul className="space-y-6">
              <li>
                <Link to="/product-info" className="hover:text-blue-600">
                  Product Info Management
                </Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-blue-600">
                  API Management
                </Link>
              </li>
              <li>
                <Link to="/integration" className="hover:text-blue-600">
                  Seamless Integration
                </Link>
              </li>
              <li>
                <Link to="/ai" className="hover:text-blue-600">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="hover:text-blue-600">
                  Logistics Management
                </Link>
              </li>
              <li>
                <Link to="/mobile" className="hover:text-blue-600">
                  Mobile Applications
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-l-[1px] border-gray-100 pl-3">
            <p className="py-2">What'a New</p>
            <ul className="space-y-6">
              <li>
                <img
                  className="w-full h-48 rounded-2xl"
                  src="https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
                  alt="image"
                />
              </li>
              <li>
                <img
                  className="w-full h-48 rounded-2xl"
                  src="https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
                  alt="image"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default DesktopHeader;
