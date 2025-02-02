// import CommentSection from '@/components/shared/Coments';
// import fetchPost from '@/helper/Singlepost';
// import { urlFor } from '@/sanity/lib/image';
// import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import PortableText from 'react-portable-text';


// interface post{
//     title:string,
//     description:string,
//     authorName:string,
//     authorImage:string,
//     authorBio:string,
//     mainImage:string,
//     publishedAt:string,
//     body:object[],
//   }


// export default async function Post({params}:{params:Promise<{slug:string}>}) {
//   const data =await params;
// const {slug} = data;
//   const post:post = await fetchPost(slug);
// console.log(post);

//     return (
//    <main className='w-full'>
//     <div className=''>
//       <Image 
//        src={urlFor(post.mainImage).url()}
//        alt=''
//        width={500}
//        height={500}
//        className='w-full h-[45vh] object-cover'
//       />
//     </div>
//       <article className='max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto pt-6 sm:pt-12 px-5'>
//       <div> 
//       <h1 className='scroll-m-20 text-4xl leading-tight font-bold tracking-tight lg:text-5xl mb-6'>{post.title}</h1>
//       <div className="divider divider-neutral"></div>
//       <h4 className="scroll-m-20 text-lg text-blue-500 font-bold tracking-tight">
//       Published At : {new Date(post.publishedAt).toLocaleString()}
//     </h4>
//     </div>
//     <div className='pt-5 sm:px-0'>
//         <PortableText
//         content={post.body}
//         serializers={{
//           h1: (props: object) => (
//             <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6" {...props} />
//           ),
//           h2: (props: object) => (
//             <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 mt-5" {...props} />
//           ),
//           h3: (props: object) => (
//             <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-5" {...props} />
//           ),
//           h4: (props: object) => (
//             <h2 className="scroll-m-20 text-xl  font-semibold tracking-tight mb-2 mt-5" {...props} />
//           ),
//           p: ({ children }: React.ReactNode|string ) => (
//             <p className="leading-loose [&:not(:first-child)]:mt-6 mb-4">{children}</p>
//           ),
//           blockquote: ({ children }: any) => (
//             <blockquote className="pl-4 border-l-4 border-gray-400 italic my-4">
//               {children}
//             </blockquote>
//           ), 
//          normal: ({ children }: any) => (
//               <p className="leading-relaxed text-customcolor text-lg [&:not(:first-child)]:mt-6 mb-4">
//                 {children}
//               </p>
//     ),
//           li: ({ children }:any) => (
//             <li className="ml-6 list-disc mb-2">{children}</li>
//           ),
//           link: ({ href, children }: any) => (
//             <Link
//               href={href}
//               className="text-blue-500 underline hover:text-blue-700"
//             >
//               {children}
//             </Link>
//           ),
//           types: {
//             image: ({ node }: any) => (
//               <div className="my-6 flex">
//                 <img
//                   src={urlFor(node).width(600).height(450).url()}
//                   alt={node.alt || 'Sanity Image'}
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             ),
//           },
//         }}
//         projectId="u31wexco"
//         dataset="production"    
//       />
//     </div>
//     <div className="divider divider-neutral mt-2"></div>
//     <div className='flex flex-row w-full mt-4 sm:mt-8'>
//             <Image
//               className="w-16 h-16 sm:w-20 sm:h-20 rounded-[100%]"
//               src={urlFor(post.authorImage).url()} 
//               alt={post.authorName}
//               width={64}
//               height={64}
//             />
//           <div className='pt-2 pl-4 flex flex-col w-full max-w-48'>
//            <p className='leading-relaxed font-bold text-lg [&:not(:first-child)]'>{post.authorName}</p>
//            <p className="leading-relaxed text-customcolor text-lg [&:not(:first-child)]">{post.authorBio}</p>
//           </div>
//         </div>
//         <SignedIn>
//   <CommentSection />
// </SignedIn>

// <SignedOut>
//   <div className="mt-4 p-4 border rounded-lg text-center">
//     <p className="text-gray-600 mb-2">
//       Please sign in to leave a comment
//     </p>
//     <SignInButton mode="modal" />
//   </div>
// </SignedOut>
//       </article>
//    </main>
//   )
// }


import CommentSection from '@/components/shared/Coments';
import fetchPost from '@/helper/Singlepost';
import { urlFor } from '@/sanity/lib/image';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PortableText from 'react-portable-text';

interface Post {
  title: string;
  description: string;
  authorName: string;
  authorImage: string;
  authorBio: string;
  mainImage: string;
  publishedAt: string;
  body: object[];
}

interface PortableTextProps {
  children?: React.ReactNode;
  node?: any; // Replace with a more specific type if you know the structure of `node`
  href?: string;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const data = await params;
  const { slug } = data;
  const post: Post = await fetchPost(slug);
  console.log(post);

  return (
    <main className='w-full'>
      <div className=''>
        <Image
          src={urlFor(post.mainImage).url()}
          alt=''
          width={500}
          height={500}
          className='w-full h-[45vh] object-cover'
        />
      </div>
      <article className='max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto pt-6 sm:pt-12 px-5'>
        <div>
          <h1 className='scroll-m-20 text-4xl leading-tight font-bold tracking-tight lg:text-5xl mb-6'>{post.title}</h1>
          <div className="divider divider-neutral"></div>
          <h4 className="scroll-m-20 text-lg text-blue-500 font-bold tracking-tight">
            Published At : {new Date(post.publishedAt).toLocaleString()}
          </h4>
        </div>
        <div className='pt-5 sm:px-0'>
          <PortableText
            content={post.body}
            serializers={{
              h1: (props: PortableTextProps) => (
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6" {...props} />
              ),
              h2: (props: PortableTextProps) => (
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 mt-5" {...props} />
              ),
              h3: (props: PortableTextProps) => (
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-5" {...props} />
              ),
              h4: (props: PortableTextProps) => (
                <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-5" {...props} />
              ),
              p: ({ children }: PortableTextProps) => (
                <p className="leading-loose [&:not(:first-child)]:mt-6 mb-4">{children}</p>
              ),
              blockquote: ({ children }: PortableTextProps) => (
                <blockquote className="pl-4 border-l-4 border-gray-400 italic my-4">
                  {children}
                </blockquote>
              ),
              normal: ({ children }: PortableTextProps) => (
                <p className="leading-relaxed text-customcolor text-lg [&:not(:first-child)]:mt-6 mb-4">
                  {children}
                </p>
              ),
              li: ({ children }: PortableTextProps) => (
                <li className="ml-6 list-disc mb-2">{children}</li>
              ),
              link: ({ href, children }: PortableTextProps) => (
                <Link
                  href={href || '#'}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {children}
                </Link>
              ),
              types: {
                image: ({ node }: PortableTextProps) => (
                  <div className="my-6 flex">
                    <img
                      src={urlFor(node).width(600).height(450).url()}
                      alt={node.alt || 'Sanity Image'}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ),
              },
            }}
            projectId="u31wexco"
            dataset="production"
          />
        </div>
        <div className="divider divider-neutral mt-2"></div>
        <div className='flex flex-row w-full mt-4 sm:mt-8'>
          <Image
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-[100%]"
            src={urlFor(post.authorImage).url()}
            alt={post.authorName}
            width={64}
            height={64}
          />
          <div className='pt-2 pl-4 flex flex-col w-full max-w-48'>
            <p className='leading-relaxed font-bold text-lg [&:not(:first-child)]'>{post.authorName}</p>
            <p className="leading-relaxed text-customcolor text-lg [&:not(:first-child)]">{post.authorBio}</p>
          </div>
        </div>
        <SignedIn>
          <CommentSection />
        </SignedIn>
        <SignedOut>
          <div className="mt-4 p-4 border rounded-lg text-center">
            <p className="text-gray-600 mb-2">
              Please sign in to leave a comment
            </p>
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
      </article>
    </main>
  );
}
