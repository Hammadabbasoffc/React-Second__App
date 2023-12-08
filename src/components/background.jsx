import React from 'react'

function background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2] '>
    <div className="absolute top-[5%] w-full font-semibold text-zinc-600 flex justify-center py-10 text-xl" >Documents</div>
      <h1 className="absolute text-[14vw] leading-none tracking-tighter	top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold	">Docs.</h1>
      </div>
    </>
  )
}

export default background;