
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';


interface post{
  title:string,
  slug:string,
  description:string,
  authorName:string,
  authorImage:string,
  authorBio:string,
  mainImage:string,
  publishedAt:string,
}

const BlogCard = ({slug,title,description,authorName,authorImage,authorBio,mainImage,publishedAt}:post) => {
  return (
<>
    <div
      className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {mainImage ? (
        <Image
          className="object-cover w-full rounded-t-lg h-64 md:h-96 md:rounded-lg"
          src={urlFor(mainImage).url()}
          alt={title}
          width={192}
          height={192}
        />
      ) : null}
      <div className="flex flex-col justify-between w-full items-start pt-2 px-6 leading-normal">
     <p className='mb-3 mt-2 font-normal text-customcolor'>{publishedAt}</p>
     <Link href={`/blogs/${slug}`}><h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5></Link>
        <Link href={`/blogs/${slug}`}>   <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {description}  <span className='text-blue-500'>read more...</span>
        </p></Link>
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
          <div className='pt-2 pb-4 pl-4 flex flex-col w-full max-w-48'>
           <p className='font-semibold'>{authorName}</p>
           <p className='text-customcolor'>{authorBio}</p>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default BlogCard;
