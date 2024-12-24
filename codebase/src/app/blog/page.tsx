'use client'

import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import CommonFooter from "../common/footer";
import BlogForm from "./component/blog_form";
import BlogCard from "./component/card";
import { useEffect, useState } from "react";

type BlogCardProps = {
    id: number,
    title: string;
    description: string;
    category: string;
    content: string;
    email: string;
    username: string;
    date: string
}

export default function BlogPage(){
    const [blogData, setBlogData] = useState<BlogCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blog/select');
                const data = await response.json();
                
                if (response.ok) {
                    console.log('Fetched blogs:', data);
                    setBlogData(data);

                } else {
                    console.log("Error fetching blogs", data.error);
                }
            } catch (error) {
                console.log('Error fetching blogs: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, ); // Re-run the effect when the param changes

    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Share Your Thoughts" textDown="" image="destination.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Blogs</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Blog Area</div>
                    <span className="text-gray-600 "></span>
                    
                </div>
                <BlogForm/>
                <div className="flex gap-5 flex-wrap my-8 mx-auto items-center">

                    {blogData.map((blog)=>(<BlogCard key={blog.id} category={blog.category} content={blog.content} description={blog.description} email={blog.email} title={blog.title} username={blog.username} date={blog.date}/>))}
                </div>
            </div>
            <CommonFooter/>
        </div>
    )
}