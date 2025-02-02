import React from 'react'
import Wrapper from './Wrapper';


interface Blog{
    image:string,
    tag:string,
    title:string,
}

const post:Blog[]=[
{image:"/Blog1.png", tag:"Travel",title:"Paris" },

{image:"/Blog2.png", tag:"Adventure",title:"Fascination" },

{image:"/Blog3.png", tag:"Life",title:"Tommorrow" },

]

function EditorPick({ heading}:{heading:string}) {
  return (
    <>
     <Wrapper>
      <div className="pt-14 sm:pt-24 sm:px-4">
        <h1 className="text-3xl mb-5 sm:mb-7  text-customcolor sm:text-4xl font-bold">
          {heading}
        </h1>
        <div className="w-full flex flex-row gap-x-5 mb-2 gap-y-9 sm:gap-y-12 items-center flex-wrap">
          {post.map(e=>
          
          <div key={e.title} className="relative transition hover:scale-110 ease-in-out isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-60 max-w-sm mx-auto mt-4 w-[370px] sm:w-[400px]">
           <img src={e.image} alt="pic" className="absolute inset-0 h-full w-full object-cover"></img>
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
           <h3 className="z-10 mt-3 text-3xl font-bold text-white">{e.title}</h3>
           <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{e.tag}</div>
       </div>
          )}
        </div>
        </div>
    </Wrapper>
    </>
  )
  }
export default EditorPick;