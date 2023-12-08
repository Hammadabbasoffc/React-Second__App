import React, { useRef, useState } from 'react'
import Card from './card'


function Foreground() {

    const ref = useRef(null);
    
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.lorem7 Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag:{
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.lorem7 Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "blue"
            },
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.lorem7 Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
    ];

    


  return (
    <div ref={ref} className="fixed w-full h-full z-[3] top-0 left-0 flex gap-5 flex-wrap">
        {data.map((item , index)=>(
            <Card data={item} reference = {ref} />
        ))}
    </div>
  )
}

export default Foreground