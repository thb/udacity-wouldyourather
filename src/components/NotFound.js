import React from 'react'

const NotFound = () => {
  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4">
      <div className="box-border border-4 border-gray-200 m-4 rounded-lg">
        <div className=" bg-gray-100 p-2 border-b-4 border-gray-200 flex justify-between">
          <div className="font-bold text-base">404</div>
        </div>
        <div className="flex">
          <div className="p-4 w-full">
            <div className="font-bold text-xl">Page not found</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound