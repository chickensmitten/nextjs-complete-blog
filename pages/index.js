import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs", 
    title: "Getting started with NextJs", 
    image: "getting-started-nextjs.png", 
    excerpt: "NEXTJS is a React Framework for Production, it makes building fullstack react a breeze...", 
    date: "2022-08-10",
  },
  {
    slug: "getting-started-with-nextjs-1", 
    title: "Getting started with NextJs", 
    image: "getting-started-nextjs.png", 
    excerpt: "NEXTJS is a React Framework for Production, it makes building fullstack react a breeze...", 
    date: "2022-08-10",
  },  
  {
    slug: "getting-started-with-nextjs-2", 
    title: "Getting started with NextJs", 
    image: "getting-started-nextjs.png", 
    excerpt: "NEXTJS is a React Framework for Production, it makes building fullstack react a breeze...", 
    date: "2022-08-10",
  },
  {
    slug: "getting-started-with-nextjs-3", 
    title: "Getting started with NextJs", 
    image: "getting-started-nextjs.png", 
    excerpt: "NEXTJS is a React Framework for Production, it makes building fullstack react a breeze...", 
    date: "2022-08-10",
  },    
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage;
