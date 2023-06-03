import BlogCard from './BlogCard'

export default function BlogSection() {
  return (
    <div className="bg-gray-100">
    <div className="mx-auto max-w-2xl px-4 md:pt-20 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
      <p className={`text-md text-yellow-500 mb-2`}>
        Information is power
      </p>
      <h2 className={`text-2xl md:text-2xl lg:text-3xl tracking-tight text-gray-900 font-semibold`}>
        THE AUTOMOBILE INDUSTRY IS HUGE
      </h2>

      <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {[1,2,3,4,5,6,7,8].map(() => (
         <BlogCard />
        ))}
      </div>
      
    </div>
  </div>
  )
}
