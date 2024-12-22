import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import CommonFooter from "../common/footer";
import BlogForm from "./component/blog_form";
import BlogCard from "./component/card";


export default function BlogPage(){
    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Share Your Thoughts" textDown="" image="destination.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Blog</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Blog Area</div>
                    <span className="text-gray-600 "></span>
                    
                </div>
                <BlogForm/>
                <div className="flex gap-5 flex-wrap my-8 mx-auto items-center">

                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
            <CommonFooter/>
        </div>
    )
}