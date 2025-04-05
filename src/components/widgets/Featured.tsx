"use client"

import React, { useEffect, useState } from 'react';
import Wrapper from '../shared/Wrapper';
import PostCard from '../shared/PostCard';
import  fetchPosts  from '../../helper/Fetchposts';

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

const Featured = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All'); 

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts); 

        
        const allCategories: string[] = fetchedPosts.flatMap((post:Post) => post.categories);
        const uniqueCategories = Array.from(new Set(allCategories));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const filterPostsByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.categories.includes(category)
      );
      setFilteredPosts(filtered);
    }
  };

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <Wrapper>
      <div className="pt-14 sm:pt-24 sm:px-4">
        <h1 className="text-3xl mb-5 sm:mb-7  text-customcolor sm:text-4xl font-bold">
          Popular Topics
        </h1>
       
        <div className="flex sm:gap-x-2  mb-6 text-customcolor text-lg">
          <button
            className={`py-2 pr-2 ${selectedCategory === 'All' ? 'border-b-2 pt-2 text-blue-500  border-blue-500' : 'border-none'}`}
            onClick={() => filterPostsByCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 pt-2 pb-2 ${selectedCategory === category ? 'border-b-2  text-blue-500   border-blue-500' : 'border-none'}`}
              onClick={() => filterPostsByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full flex flex-row gap-x-5 gap-y-9 sm:gap-y-12 items-center flex-wrap">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Featured;

