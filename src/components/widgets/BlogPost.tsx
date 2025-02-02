import fetchPosts from '../../helper/Fetchposts';
import BlogCard from '../shared/blogCard';
import Wrapper from '../shared/Wrapper';


interface Post {
  title: string;
  description: string;
  slug: string;
  authorName: string;
  authorImage: string;
  authorBio: string;
  categories: string[]; 
  mainImage: string;
  publishedAt: string;
}

export default async function BlogSection(){
const posts:Post[] = await fetchPosts(); 
  return (
    <Wrapper>
      <div className="pt-32 sm:pt-40 sm:px-4">
        <h1 className="text-4xl mb-6 max-w-4xl mx-auto sm:mb-10 text-center text-customcolor sm:text-5xl font-bold">
          All Blogs
        </h1>
        <div className="w-full flex flex-row gap-x-5 gap-y-9 sm:gap-y-12 items-center justify-center flex-wrap">
         {
            posts.map(e=>
                <BlogCard
                 key={e.slug} {...e}
                />
         )} 
        </div>
      </div>
    </Wrapper>
  );
};
