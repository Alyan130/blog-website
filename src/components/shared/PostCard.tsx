
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface post{
  slug:string,
  title:string,
  description:string,
  authorName:string,
  authorImage:string,
  authorBio:string,
  mainImage:string,
  publishedAt:string,
}

const PostCard = ({slug,title,description,authorName,authorImage,authorBio,mainImage,publishedAt}:post) => {
  return (
<>
<div className=" max-w-sm sm:max-w-xs lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
{mainImage && mainImage !== "" ? (
         <Image
          className="rounded-t-lg w-full h-56"
          src={urlFor(mainImage).url()} 
          alt={title}
          width={300}
          height={300}
        />
      ) : null}  
    <div className="p-5">
            <p className='mb-2 font-normal text-customcolor'>{publishedAt}</p>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-customcolor dark:text-gray-400">{description}<Link href={`/blogs/${slug}`}><span className='text-blue-500'> Read more...</span></Link></p>
        <div className="divider"></div>
        <div className='flex flex-row w-full'>
        {authorImage ? (
            <Image
              className="w-16 h-16 rounded-[100%]"
              src={urlFor(authorImage).url()} 
              alt={authorName}
              width={64}
              height={64}
            />
          ) : null}
          <div className='pt-2 pl-4 flex flex-col w-full max-w-48'>
           <p className='font-semibold'>{authorName}</p>
           <p className='text-customcolor'>{authorBio}</p>
          </div>
        </div>
    </div>
</div>
  </>

);
};

export default PostCard;
