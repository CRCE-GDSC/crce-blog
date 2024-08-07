"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  views: number;
  comments: number;
}

interface BlogComponentProps {
  posts: BlogPost[];
  categories: string[];
}
const BlogCard: React.FC<BlogPost> = ({
  category,
  title,
  excerpt,
  imageUrl,
  views,
  comments,
}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          height={1000}
          width={1000}
          src={imageUrl}
          alt={title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{excerpt}</p>
          <div className="flex items-center flex-wrap">
            <Link href={"/blog-view"} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle
                  cx="12"
                  cy="12"
                  r="3"></circle>
              </svg>
              {views}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              <h1>{comments}</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogComponent: React.FC<BlogComponentProps> = ({ posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredPosts = posts.filter(
    (post) => post.category === activeCategory
  );

  return (
    <div className="px-4 py-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-blue-950 mb-6">Top Blog Posts</h2>

      {/* Tab Navigation */}
      <div className="flex mb-4 border-b">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-medium ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <section className="text-gray-600 body-font w-full">
        <div className="w-full px-5 mx-auto">
          <div className="w-full flex flex-wrap">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogComponent;
