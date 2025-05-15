import React from 'react'

type Props = object

function LoginButton({}: Props) {
  return (
    <div className='bg-gray-100/30 flex flex-row rounded-full m-4 p-2 items-center'>
      <div className='bg-gray-200 w-10 h-10 rounded-full'></div>
      <div className='flex flex-col m-1 text-xs font-bold'>
        <div className='text-white'>João Silva</div>
        <div className='text-gray-300'>Produtor</div>
      </div>  
    </div>
  )
}

export default LoginButton