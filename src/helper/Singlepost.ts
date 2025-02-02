import { client } from "@/sanity/lib/client";


const fetchPost= async (slug:string)=>{
    const query = `
    *[_type == "post" && slug.current=="${slug}"]{
        title,
        description,
      "slug":slug.current,
        "authorName": author->name,
        "authorImage": author->image,
         "authorBio":author->bio,
        "categories": categories[]->title,
        publishedAt,
        mainImage,
        body,
      }[0]      
    `
  const posts = await client.fetch(query);
  return posts;
}

export default fetchPost;
