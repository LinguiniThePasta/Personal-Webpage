import { Inter } from "next/font/google";
import Link from 'next/link'
import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/Blog";
import {serialize} from "next-mdx-remote/serialize";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ blogs }) {
    console.log(blogs)
    return (
        <>
            <div>
                {
                    blogs.map( (blog) => {
                        return (
                            <div>
                                <Link href={ {pathname: "/blogs/[slug]", query: { slug: blog.slug } } }>
                                    <button>Press to see blog with slug {blog.slug}</button>
                                </Link>
                            </div>
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