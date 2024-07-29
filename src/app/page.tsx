// Code for the landing page
import React from "react";
import BlogComponent from "@/components/blogs";
import LoadingNavbar from "@/components/LoadingNavbar";
import TabsExample from "@/components/courses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-center">
      <LoadingNavbar />
      <h1 className="text-6xl font-bold">Welcome to CRCE Blogs</h1>
      <TabsExample />
      <Footer/>
      
 
    </main>
  );
}
