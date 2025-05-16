import React from 'react'

type Props = object

function LoginButton({}: Props) {
  return (
    <div className='bg-gray-100/30 flex flex-row rounded-full p-1 items-center h-10 space-x-1'>
      <div className='bg-gray-200 w-8 h-8 rounded-full'></div>
      <div className='flex flex-col m-1 text-xs font-bold'>
        <div className='text-white'>João Silva</div>
        <div className='text-gray-300'>Produtor</div>
      </div>  
      <div className='bg-gray-200 w-8 h-8 rounded-full'></div>
    </div>
  )
}

export default LoginButton