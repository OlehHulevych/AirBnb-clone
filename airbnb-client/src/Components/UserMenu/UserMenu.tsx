import React from 'react'
import { MainContext } from '../../context/MainContext'
import { useContext } from 'react'
import UserMangmaentMenu from './UserMangmaentMenu'
import { UserRegistration } from './UserRegistration'

export const UserMenu= () => {
  const {registration} = useContext(MainContext)
  return (
    <div className='w-full min-h-screen flex flex-col justify-center fixed top-0 bottom-0 left-0 bg-gray-950/75 z-100 '>
        {!registration && <UserMangmaentMenu/>}
        {registration && <UserRegistration/>}

        
    </div>
  )
}
