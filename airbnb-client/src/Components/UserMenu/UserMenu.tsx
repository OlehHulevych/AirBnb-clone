import React from 'react'

export const UserMenu= () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center fixed top-0 bottom-0 left-0 bg-gray-950/75 z-100 '>
        <div className='w-[35%] h-1/2 bg-gray-600 mx-auto rounded-3xl flex flex-col items-center justify-center text-2xl text-white'>
            <div className='mb-8 font-bold' >User profile</div>
            <div className='pb-4 pt-4 capitalize font-semibold border-b-2 border-t-2 border-solid w-full text-center cursor-pointer'>log out</div>
            <div className='pb-4 pt-4 capitalize font-semibold border-b-2 border-t-2 border-solid w-full text-center cursor-pointer'>Settings</div>
            <div className='pb-4 pt-4 capitalize font-bold border-b-2 border-t-2 border-solid w-full text-center border-white text-red-500 cursor-pointer'>Cancel</div>
        </div>
    </div>
  )
}
