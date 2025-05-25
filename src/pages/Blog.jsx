import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding the Rise of AI in Everyday",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      alt: "Artificial intelligence concept",
      date: "2025-05-20",
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends in 2025",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      alt: "UI/UX design sketches",
      date: "2025-05-08",
    },
    {
      id: 3,
      title: "Why Tailwind CSS is So Popular",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      alt: "CSS code on monitor",
      date: "2025-04-22",
    },
    {
      id: 4,
      title: "Exploring Next.js for Modern Web Apps",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Next.js on code editor",
      date: "2025-04-06",
    },
    {
      id: 5,
      title: "Why Tailwind CSS is So Popular",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      alt: "CSS code on monitor",
      date: "2025-04-22",
    },
    {
      id: 6,
      title: "Exploring Next.js for Modern Web Apps",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Next.js on code editor",
      date: "2025-04-06",
    },
  ];

  return (
    <div className="bg-[#0C1D4F] text-white max-w-[1540px] mx-auto pt-10 ">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-gray-300 mt-10 md:mt-0">
          Blogs
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          Discover Our Latest <br /> Articles
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-40 md:pb-80">
        <div className="bg-[#151F54]/90 border-[0.1px] border-gray-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58"
              alt="Featured"
              className="rounded-lg w-full  md:h-96 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-left ">
            <p className="text-sm text-gray-400 mb-2">Featured</p>
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

      <div className="bg-[#F9F8FC]  text-[#0C1D4F] px-4 pb-12 pt-4 text-start ">
        <div className="max-w-7xl mx-auto text-start">
          <h2 className="text-2xl md:text-4xl font-bold">All Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 pt-10 md:pt-20">
            {blogs.map((blog) => (
              <div key={blog.id} class="max-w-sm rounded overflow-hidden ">
                <div class=" p-2 border-[1px] border-gray-200 rounded-xl">
                  <img
                    class="w-full h-72  rounded-lg"
                    src={blog.image}
                    alt={blog.alt}
                  />
                </div>
                <div class=" py-4">
                  <div class="font-medium text-xl mb-2">{blog.title}</div>
                  <p class="text-gray-400 text-sm font-normal ">22Feb2025</p>
                </div>
                <Link to={`/blog/${blog.id}`}>
                  <button className="flex flex-row gap-2 items-center justify-center p-3 px-5 text-base bg-[#001038] text-white rounded-full ">
                    Read More <GoArrowRight />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F9F8FC] text-[#0C1D4F] px-4 pb-5  lg:pb-36 pt-8">
        <div className="max-w-7xl mx-auto text-start">
          <h2 className="text-2xl font-bold mb-12">My Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="h-48">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-start">
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(blog.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <Link to={`/blog/${blog.id}`}>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm bg-[#001038] text-white rounded-full hover:bg-[#1f2b6c] transition-all">
                      Read More <GoArrowRight />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white relative w-full z-50 hidden lg:block">
        <div className="max-w-6xl absolute w-full left-1/2 transform -translate-x-1/2 -top-26 bg-[#121E44] rounded-2xl p-6 md:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left leading-snug">
            Ready to Transform <br className="hidden md:block" />
            Your Retail?
          </h2>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#697CFA] hover:bg-[#5a6be0] text-white px-6 py-3 rounded-full font-medium text-sm transition-transform duration-300 hover:scale-105"
          >
            Let’s Talk <GoArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
