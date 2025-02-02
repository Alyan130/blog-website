import React from 'react'

function Wrapper({children}:{children:React.ReactNode}) {
  return (
    <>
    <section className='w-full'>
    <div className='max-w-7xl mx-auto px-4'>
    {children}
    </div>
    </section>
    </>
  )
}

export default Wrapper