import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export const UserRegistration = () => {
    const {setOpen} = useContext(MainContext)
    return (
      <div className='w-[45%] h-[80%] bg-gray-600 mx-auto rounded-3xl flex flex-col  py-10 text-2xl text-white max-[790px]:text-xl max-[790px]:w-[40%]  max-[650px]:w-1/2 max-[420px]:w-[85%] transition-all ease-in-out cursor-default px-10 font-roboto '>
              <div className='mb-8 font-bold  ' >Registration</div>
              <form action="">
                <div className='flex flex-col mb-4 text-xl'>
                    <label className='mb-2' htmlFor="Name">Name</label>
                    <input className='py-2 px-5 bg-gray-700 capitalize font-semibold  ' type='text'/>
                </div>
                <div className='flex flex-col mb-4 text-xl'>
                    <label className='mb-2' htmlFor="Name">City</label>
                    <input className='py-2 px-5 bg-gray-700 capitalize font-semibold  ' type='text'/>
                </div>
                <div className='flex flex-col mb-4 text-xl'>
                    <label className='mb-2' htmlFor="Name">Password</label>
                    <input className='py-2 px-5 bg-gray-700 capitalize font-semibold  ' type='password'/>
                </div>
                <div className='flex flex-col mb-4 text-xl'>
                    <label className='mb-2' htmlFor="Name">Confirm Password</label>
                    <input className='py-2 px-5 bg-gray-700 capitalize font-semibold  ' type='password'/>
                </div>
              </form>
              <div className='text-xl text-center font-semibold cursor-pointer'>Already have account?</div>
             
            
        </div>
    )
}
