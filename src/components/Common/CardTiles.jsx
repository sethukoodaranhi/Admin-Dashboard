import React from 'react'
import { Icon } from '@iconify/react'
function CardTiles({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
            <Icon icon={item.icon} width="32" height="32" className="text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardTiles