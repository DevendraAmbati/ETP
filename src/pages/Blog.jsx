import React from "react";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  const blogs = [
    {
      title: "Understanding the Rise of AI in Everyday Life",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      alt: "Artificial intelligence concept",
      date: "2025-05-20",
    },
    {
      title: "Top 5 UI/UX Trends in 2025",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      alt: "UI/UX design sketches",
      date: "2025-05-08",
    },
    {
      title: "Why Tailwind CSS is So Popular",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      alt: "CSS code on monitor",
      date: "2025-04-22",
    },
    {
      title: "Exploring Next.js for Modern Web Apps",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Next.js on code editor",
      date: "2025-04-06",
    },
  ];

  return (
    <div className="bg-[#0C1D4F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-gray-300 mt-10 md:mt-0">
          Blogs
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          Discover Our Latest <br /> Articles
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-80">
        <div className="bg-[#151F54]/80  rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58"
              alt="Featured"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <p className="text-sm text-gray-400 mb-1">Featured</p>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Can Data-Driven Insights Improve Your Promotions, Inventory, and
              Customer Engagement?
            </h3>
            <p className="text-sm text-gray-400 mb-4">22 Mar 2024</p>
            <button className="bg-[#6B7CFF] hover:bg-[#5c6be0] text-white py-2 px-4 rounded-full text-sm transition-all">
              Read More →
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-[#0C1D4F]">
        <div className="absolute inset-x-0 bottom-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[120px] md:h-[180px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#F9F8FC"
              d="M0,320 C480,0 960,0 1440,320 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#F9F8FC]  text-[#0C1D4F] px-4 pb-12 pt-4 text-start grid justify-center">
        <h2 className="text-2xl md:text-8xl font-bold">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 pt-10 md:pt-20">
          {blogs.map((blog, index) => (
            <div key={index} class="max-w-sm rounded overflow-hidden ">
              <div class=" p-2 border-[1px] border-gray-200 rounded-xl">
                <img
                  class="w-full  rounded-lg"
                  src={blog.image}
                  alt={blog.alt}
                />
              </div>
              <div class=" py-4">
                <div class="font-bold text-xl mb-2">{blog.title}</div>
                <p class="text-gray-700 text-base">22Feb2025</p>
              </div>
              <button className="flex  flex-row gap-2 items-center justify-center p-3 bg-[#001038] text-white rounded-2xl ">
                Read More <GoArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
