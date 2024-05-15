import { Inter } from "next/font/google";
import Link from 'next/link'
import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/Blog";
import {serialize} from "next-mdx-remote/serialize";
import BlogCard from "@/components/BlogCard";
import {useEffect, useState} from "react";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ blogs }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [blogsArray, setBlogsArray] = useState(blogs);
    const [filters, setFilters] = useState([]);

    const handleSearch = async () => {
        try {
            console.log(searchTerm);
            const response = await fetch(`/api/search?q=${searchTerm}`);

            const data = await response.json();
            console.log("hello", data);
            setBlogsArray(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
    useEffect(() => {
        handleSearch();
    }, [searchTerm]);
    return (
        <>
            <SearchBar searchTerm={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value);
            } }/>
            <div className={"flex flex-wrap justify-center"}>
                {
                    blogsArray.map( (blog) => {
                        return (
                            <BlogCard path={"blogs/[slug]"} blog={blog}/>
                        )
                    })
                }
            </div>
        </>
    );
}

export const getServerSideProps = async () => {
    await dbConnect();
    const results = await Blog.find({}).select("slug title description")
        .then( (blogs) => blogs.map( (blog) => {
            blog = blog.toObject()
            blog._id = blog._id.toString()
            return (blog)
        }) );
    return {
        props: {
            blogs: results
        }
    }
}