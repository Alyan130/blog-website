import { RiMenuLine } from "react-icons/ri";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

type Opacity={
 opacity:string,
}
export default async function Header({opacity}:Opacity) {
  const {userId}= await auth();
  return (
    <header className="absolute z-10 top-0 left-0 w-full">
  <nav className={`w-full relative bg-black h-[70px] flex flex-row items-center justify-between px-3 sm:px-0`} style={{opacity:opacity}}>
    <div className=" hidden absolute sm:flex flex-row items-center justify-between px-4 pr-4 w-full">
      <span className="text-[25px] font-bold text-white">BLOG</span>

      <div className="flex flex-row gap-5">
        <ul className="gap-10 hidden md:flex">
          <Link href={"/"}><li className="text-white text-lg hover:text-orange-400 transition-all duration-150">Home</li></Link>
          <Link href={"/blogs"}><li className="text-white text-lg  hover:text-orange-400 transition-all duration-150">Articles</li></Link>
          <Link href={"/contactus"}><li className="text-white text-lg hover:text-orange-400 transition-all duration-150">Contact us</li></Link>
        </ul>
        {
          userId ? (
            <>
            <div><span className="text-white">|</span></div>
           <UserButton/>
           </>
          ):(
            <>
               <div><span className="text-white">|</span></div>
            <Link href={"/sign-up"}><p className="text-white text-lg  rounded-full hover:text-orange-400 transition-all duration-150">Sign up</p></Link>
            <Link href={"/sign-in"}><p className="text-white text-lg hover:text-orange-400 transition-all duration-150">Sign in</p></Link>
            </>
          )
        }
      </div>
    </div>
    <span className="text-xl font-bold text-white sm:hidden">BLOG</span>
    <Sheet>
  <SheetTrigger><RiMenuLine size={28} className="font-bold md:hidden text-white"/></SheetTrigger>
  <SheetContent className="flex flex-col items-center  py-32">
    <span className="text-left scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" >BLOG</span>
    <div className="border-[1px] max-w-24 border-slate-500 w-full"></div>
  <ul className="text-left ml-8">
        <Link href={"/"}><li className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Home</li></Link>
        <Link href={"/blogs"}><li className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Articles</li></Link>
        <Link href={"/contactus"}><li className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Contact Us</li></Link>
        {
          userId ? (
            <>
            <div className="w-full flex items-center justify-center mt-2">
           <UserButton/>
           </div>
           </>
          ):(
            <>
            <Link href={"/sign-up"}><p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Sign up</p></Link>
            <Link href={"/sign-in"}><p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Sign in</p></Link>
            </>
          )
        }
    </ul>
  </SheetContent>
</Sheet>
    </nav>
  </header>
  );
}