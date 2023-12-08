import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";



function card({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='w-60 h-72 px-5 py-7 flex-shrink-0 rounded-[30px] bg-zinc-500   text-white relative overflow-hidden'>
        <FaRegFileLines />
        <p className='leading-none text-xl mt-5 mb-5 font-normal '>{data.desc}</p>
        <div className='footer w-full  bottom-0  absolute  left-0 '>
            <div className='flex items-center justify-between  font-semibold mb-3 px-5  '>
                <h5>{data.fileSize}</h5>
                <span className='w-6 h-6 rounded-full bg-black  items-center justify-center flex cursor-pointer '>
                {data.close ? <IoMdCloseCircleOutline/> : <LuDownload /> }
                
                </span>
            </div>

            {data.tag.isOpen && (
                <div className={`w-full ${data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-400"} h-10 justify-center font-semibold items-center flex-wrap flex `}>
                    <h3>{data.tag.tagTitle}</h3>
                </div>
            )}
            
        </div>

    </motion.div>
  )
}

export default card