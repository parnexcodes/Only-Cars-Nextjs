import React from 'react'
import { Image, Breathing } from 'react-shimmer'

function Cards(props) {
    const { data } = props
  return (
    <div className="flex flex-wrap flex-grow pt-8 gap-4 justify-center pb-8">
    {data.memes.map((element) => {
      return (
        <div key={element.author} className="bg-neutral-800 rounded-lg pb-2">
          <a
            href={element.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              NativeImgProps={{className: "object-cover h-64 w-96"}}
              // className="object-cover h-64 w-96"
              src={element.url}
              alt=""
              fallback={<Breathing width={384} height={256} />}
            />
          </a>
          <div className="flex justify-between">
            <p className="pl-2 pt-2 text-gray-300">
              Posted by <b>{element.author}</b>
            </p>
            <p className="pl-2 pt-2 text-gray-300 pr-2">▲ {element.ups}</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Cards