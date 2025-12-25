import React from 'react'

export default function Nodata() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

  {/* Animated Icon Container */}
  <div className="
    w-28 h-28 rounded-full
    bg-gradient-to-br from-gray-100 to-gray-200
    dark:from-gray-800 dark:to-gray-700
    flex items-center justify-center
    animate-bounce
  ">
    <span className="text-5xl">📭</span>
  </div>

  {/* Title */}
  <h2 className="mt-6 text-2xl font-bold animate-fadeIn">
    No Data Available
  </h2>

  {/* Description */}
  <p className="mt-2 max-w-md text-gray-500 animate-fadeIn delay-200">
    There’s nothing here yet. Once data is added, it will appear automatically.
  </p>


</div>

  )
}
