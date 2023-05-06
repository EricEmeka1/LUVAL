
const Miss = () => {
    return (
          <div className="flex flex-col  border-blue-500 border-2 px-5 rounded-3xl text-white py-10 md:py-16 container md:items-center text-center gap-5">
              <p className="text-2xl font-bold">Never miss a drop!</p>
              <p className="text-gray-300">Subscribe to our super-exclusive droplist and be the first to know about upcoming <b>LUVAL</b> drops.</p>
              <div className="flex items-center flex-col md:flex-row gap-5 mt-12 ">
                <div className="h-12 md:h-[3.25rem] bg-blue-500 w-full rounded-full overflow-hidden border-2 border-white md:w-[26rem] lg:w-[30rem]">
                    <input type="text" className="h-full placeholder:text-blue-200 text-center md:text-start outline-none bg-transparent border-none placeholder:font-normal text-white font-semibold text-sm md:textbase w-full px-5 " placeholder="Enter your email address"/>
                </div>
                <button className="bg-blue-600 px-7 mt-5 md:mt-0 h-12 md:h-[3.25rem] text-sm md:text-base active:scale-90 duration-500 rounded-full border-2 hover:border-white hover:bg-blue-800 border-blue-500">Subscribe</button>
              </div>
      </div>
    )
    
  }
  
  export default Miss