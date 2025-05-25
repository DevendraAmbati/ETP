import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();

  const blogData = {
    1: {
      title: "How Unified Commerce is Reshaping Retail",
      author: "John Doe",
      date: "May 24, 2025",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      content: `Unified commerce is transforming how businesses interact with customers across channels. 
      
      It connects your systems—from inventory to CRM—providing a seamless experience across in-store, mobile, and online platforms. 
      
      As customers demand more flexibility and convenience, unified commerce empowers retailers to meet those needs while improving operational efficiency.`,
      tags: ["Retail", "Ecommerce", "Technology"],
    },
    2: {
      title: "The Future of Omni Channel Retail",
      author: "Jane Smith",
      date: "May 18, 2025",
      image:
        "https://images.unsplash.com/photo-1556742400-b5f24f0c5f2e?auto=format&fit=crop&w=1000&q=80",
      content: `Omni-channel retail continues to evolve as consumer expectations rise. 

      Modern retailers are integrating physical and digital touchpoints to deliver a consistent brand experience. 

      The future will be defined by real-time personalization, seamless checkout, and data-driven decision-making.`,
      tags: ["Omnichannel", "Customer Experience", "Digital"],
    },
  };

  const blog = blogData[id];

  if (!blog)
    return <div className="p-4 text-center text-red-600">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back to Blogs
      </Link>

      {/* Featured Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 text-gray-800">{blog.title}</h1>

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-gray-600 mb-6 text-sm">
        <span className="flex items-center gap-2">
          <FaUser /> {blog.author}
        </span>
        <span className="flex items-center gap-2">
          <FaCalendarAlt /> {blog.date}
        </span>
      </div>

      {/* Content */}
      <article className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
        {blog.content}
      </article>

      {/* Tags */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
