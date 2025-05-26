import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go"

const Myblogcard = ({ blogs }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {isLoading
        ? Array.from({ length: 6 }).map((_, idx) => (
            <article
              key={idx}
              className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-5 text-start space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-10 w-28 bg-gray-200 rounded-full mt-4" />
              </div>
            </article>
          ))
        : blogs.map((blog) => (
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
  )
}

export default Myblogcard
