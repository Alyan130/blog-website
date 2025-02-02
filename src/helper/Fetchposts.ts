import { client } from "@/sanity/lib/client";

const fetchPosts= async ()=>{
    const query = `
    *[_type == "post"]{
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
      }      
    `
  const post = await client.fetch(query);
  return post;
}

export default fetchPosts;

