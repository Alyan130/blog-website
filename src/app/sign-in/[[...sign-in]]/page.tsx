import Header from '@/components/layout/Header'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return( 
    <>
    <Header opacity='0.60'/>
    <div className='max-w-md flex items-center justify-center mx-auto pt-[14vh]'>
    <SignIn/>
    </div>
    </>
    )
}