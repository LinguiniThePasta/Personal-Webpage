import {GetServerSideProps, GetServerSidePropsContext} from "next";
import { useRouter } from "next/router";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/Blog";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const blogPage = ({ blog, mdx }) => {
    return (
        <>
            <div>
                {blog.title}
            </div>
            <div>
                <MDXRemote {...mdx} />
            </div>
            <div>
                views: {blog.views}
            </div>

        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    await dbConnect();
    const result = await Blog.findOneAndUpdate({slug:  query.slug },
        {$inc: { views: 1}});
    if (!result) {
        return {
            notFound: true, // Handle 404 Not Found case if no blog found with the slug
        };
    }

    const blog = result.toObject();
    blog._id = blog._id.toString();
    const mdxSource = await serialize(blog.body)
    return {
        props: {
            blog: blog,
            mdx: mdxSource
        }
    };
}

export default blogPage;