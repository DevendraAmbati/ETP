import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Unified Commerce",
    content: [
      { label: "Cloud POS & Retail Operations", link: "/cloud-pos" },
      { label: "Smart Order Management", link: "/smart-order" },
      { label: "Omni-Channel Fulfillment", link: "/omni-channel" },
      { label: "Unified Inventory Management", link: "/inventory" },
      { label: "Unified Promotions Management", link: "/promotions" },
      { label: "Customer Relationship Management", link: "/crm" },
      {
        label: "Marketplaces & E-commerce Integrations",
        link: "/marketplaces",
      },
      { label: "Product Information Management", link: "/product-info" },
      { label: "API Management", link: "/api" },
      { label: "Seamless Integration with Partners", link: "/partners" },
      { label: "Artificial Intelligence", link: "/ai" },
      { label: "Logistics Management", link: "/logistics" },
      { label: "Mobile Applications", link: "/mobile-apps" },
    ],
    images: [
      "https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
    ],
  },
  {
    label: "e-Commerce",
    content: [
      { label: "B2C Storefront", link: "/b2c" },
      { label: "Mobile Commerce", link: "/mobile-commerce" },
      { label: "Headless Commerce", link: "/headless" },
    ],
  },
  {
    label: "Omni Channel",
    content: [
      { label: "Click & Collect", link: "/click-collect" },
      { label: "Endless Aisle", link: "/endless-aisle" },
      { label: "Ship from Store", link: "/ship-from-store" },
    ],
  },
  {
    label: "Company",
    content: [
      { label: "About Us", link: "/about" },
      { label: "Careers", link: "/careers" },
      { label: "Contact", link: "/contact" },
    ],
  },
  {
    label: "Industries",
    content: [
      { label: "Fashion", link: "/fashion" },
      { label: "Electronics", link: "/electronics" },
      { label: "Supermarkets", link: "/supermarkets" },
    ],
  },
  {
    label: "Resources",
    content: [
      { label: "Blog", link: "/blog" },
      { label: "Webinars", link: "/webinars" },
      { label: "Case Studies", link: "/case-studies" },
    ],
  },
  {
    label: "Partners",
    content: [
      { label: "Technology Partners", link: "/tech-partners" },
      { label: "Solution Partners", link: "/solution-partners" },
    ],
  },
];

export const unifiedCommerceImages = [
  "https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.SR9EReuXt406etzjbryShQHaEK?w=291&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
];

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  const goBack = () => {
    setActiveItem(null);
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">ETP</div>
        <div className="hidden md:flex items-center gap-4">
          <select className="border rounded px-2 py-1 text-sm">
            <option>EN</option>
            <option>FR</option>
          </select>
          <button className="border rounded-full px-4 py-1 text-sm">
            Let’s Talk →
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              ETP
            </Link>
            <div className="flex items-center gap-4">
              <select className="border rounded px-2 py-1 text-sm">
                <option>EN</option>
                <option>FR</option>
              </select>
              <button className="hidden md:block border rounded-full px-4 py-1 text-sm">
                Let’s Talk →
              </button>
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>
          </div>
          {!activeItem && (
            <nav className="mt-10 space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleMenuItemClick(item)}
                  className="flex justify-between items-center border-b pb-2 text-lg font-medium cursor-pointer"
                >
                  {item.label}
                  <span>›</span>
                </div>
              ))}
            </nav>
          )}

          {activeItem && (
            <div className="mt-10">
              <button
                onClick={goBack}
                className="flex items-center text-sm text-gray-600 mb-6"
              >
                ← Go Back
              </button>
              <h2 className="text-xl font-semibold mb-4">{activeItem.label}</h2>
              <div className="space-y-3 pl-2">
                {activeItem.content.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="text-gray-700 text-base block hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {activeItem?.images?.map((item, index) => (
                  <Link
                    to={item?.link}
                    key={index}
                    className="flex items-start gap-2 hover:bg-gray-100  rounded"
                  >
                    <img
                      src={unifiedCommerceImages[index]}
                      //   alt={item.label}
                      className="w-full h-40 "
                    />
                  </Link>
                ))}{" "}
              </div>
            </div>
          )}

          <div className="mt-10">
            <button className="w-full bg-[#001038] text-white py-3 rounded-full text-lg font-medium">
              Let’s Talk →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
