import React from 'react'

function Section() {
  return (
  <>
   <section className="sm:mt-24 mt-20 relative bg-cover w-full h-[70vh] sm:h-[75vh] bg-[url('/image4.png')]">
      <div className="absolute inset-0 px-4 pt-14 sm:pt-20 flex flex-col items-center justify-center text-center pl-3 sm:pl-10">
      <button className="bg-white rounded-xl text-gray-800 text-sm sm:text-lg font-bold px-3 py-2 sm:px-5 sm:py-3  opacity-40 hover:opacity-100 transition duration-300 mb-5 sm:mb-6 ">
      Travel
</button>
        <h1 className="text-white text-[26px] leading-[36px] font-bold mb-5 sm:mb-6 max-w-80 sm:max-w-3xl sm:text-5xl sm:leading-[58px]">
        Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="text-white text-sm leading-relaxed max-w-96 sm:max-w-3xl sm:text-xl">
        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
        </p>
      </div>
    </section>
  </>
  ) 
}
 
export default Section;