import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

const UserMangmaentMenu = () => {
    const {setOpen} = useContext(MainContext)
  return (
    <div className='w-[35%] h-1/2 bg-gray-600 mx-auto rounded-3xl flex flex-col items-center justify-center text-2xl text-white max-[790px]:text-xl max-[790px]:w-[40%]  max-[650px]:w-1/2 max-[420px]:w-[85%] transition-all ease-in-out cursor-default'>
            <div className='mb-8 font-bold ' >User profile</div>
            <div className='pb-4 pt-4 capitalize font-semibold border-b-2 border-t-2 border-solid w-full text-center cursor-pointer hover:bg-gray-400 '>log out</div>
            <div className='pb-4 pt-4 capitalize font-semibold border-b-2 border-t-2 border-solid w-full text-center cursor-pointer hover:bg-gray-400'>Settings</div>
            <div onClick={()=>setOpen(false)} className='pb-4 pt-4 capitalize font-bold border-b-2 border-t-2 border-solid w-full text-center border-white text-red-500 cursor-pointer hover:bg-gray-400'>Cancel</div>
        </div>
  )
}

export default UserMangmaentMenu
