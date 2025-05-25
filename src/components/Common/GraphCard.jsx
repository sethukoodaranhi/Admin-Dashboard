import React from 'react'

function GraphCard({children,title}) {
    return (
        <div className='bg-white shadow-md rounded-xl p-6  space-x-4 hover:shadow-xl transition-shadow duration-300"'>
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            {children}
        </div>
    )
}

export default GraphCard