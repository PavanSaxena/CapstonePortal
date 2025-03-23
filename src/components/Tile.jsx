import React from 'react'

const Tile = (person) => {
  return (
    <div className='flex'>
    <div className="bg-white shadow-xl rounded-lg items-center my-10 mx-10 w-full">
        <img src={person.image} alt="" className="rounded-t-md object-cover w-full" />
        <div className="pb-4 flex flex-col px-5 py-2 text-xl">
            <h2 className="font-semibold text-gray-900">{person.name}</h2>
            <p className="text-gray-600">{person.role}</p>
            <p className="text-gray-600">{person.email}</p>
            <div className='flex flex-col items-center p-2'>
                <button className='bg-sky-900 hover:bg-blue-700 text-white px-7 py-1 my-1 rounded-md'>View Information</button>
                <button className='bg-sky-900 hover:bg-blue-700 text-white px-6 py-1 mt-1 rounded-md'>Request Guideship</button>
                <p className='pt-2'>{person.slots} slots remaining</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tile