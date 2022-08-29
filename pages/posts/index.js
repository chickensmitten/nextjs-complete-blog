import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;