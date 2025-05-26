import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { GoArrowRight } from "react-icons/go"

const AllBlogscard = ({blogs}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 md:pt-20">
      {isLoading
        ? Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="max-w-sm rounded overflow-hidden animate-pulse">
              <div className="p-2 border border-gray-200 rounded-xl">
                <div className="w-full h-72 bg-gray-200 rounded-lg" />
              </div>
              <div className="py-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
              <div className="p-3 px-5 bg-gray-200 rounded-full w-32 h-10 " />
            </div>
          ))
        : blogs.map((blog) => (
            <div key={blog.id} className="max-w-sm rounded overflow-hidden">
              <div className="p-2 border border-gray-200 rounded-xl">
                <img
                  className="w-full h-72 rounded-lg"
                  src={blog.image}
                  alt={blog.alt}
                />
              </div>
              <div className="py-4">
                <div className="font-medium text-xl mb-2">{blog.title}</div>
                <p className="text-gray-400 text-sm font-normal">22Feb2025</p>
              </div>
              <Link to={`/blog/${blog.id}`}>
                <button className="flex flex-row gap-2 items-center justify-center p-3 px-5 text-base bg-[#001038] text-white rounded-full">
                  Read More <GoArrowRight />
                </button>
              </Link>
            </div>

          ))}
        
    </div>
  )
}

export default AllBlogscard
