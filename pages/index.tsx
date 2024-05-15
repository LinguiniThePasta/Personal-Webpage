import {Inter} from "next/font/google";
import Link from 'next/link'
import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/Blog";
import {serialize} from "next-mdx-remote/serialize";
import BlogCard from "@/components/BlogCard";

const inter = Inter({subsets: ["latin"]});

export default function Index({blogs}) {
    return (
        <>
            <div className={"flex bg-blue-400 justify-center text-center py-36 text-9xl"}>
                Lingyu Li
            </div>
            <div className={"flex py-10"}>
            </div>
            <div className={"flex overflow-x-auto"}>
                {
                    blogs.map((blog) => {
                        return (
                            <BlogCard path={"blogs/[slug]"} blog={blog}/>
                        )
                    })
                }
            </div>
            <div className={"flex py-10"}>
            </div>
            <div className={"flex justify-between mx-24 mb-40"}>
                <div className={"flex-col w-2/3"}>
                    <h1>
                        About Me
                    </h1>
                    <p className={"flex w-2/3"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris id magna ullamcorper
                        egestas in non nunc. In at auctor arcu. Suspendisse diam metus, venenatis in quam quis,
                        consectetur blandit mi. Duis lacinia ultrices mattis. Nunc placerat ligula sit amet magna
                        gravida lobortis. Cras finibus ac risus vel sagittis. Vestibulum vel porttitor neque, a
                        consectetur mi. Pellentesque varius semper convallis. Mauris sed elit finibus, luctus lectus ut,
                        fermentum turpis.

                        Donec at ligula massa. Ut rhoncus, lorem vitae imperdiet sagittis, erat est finibus mauris, eu
                        accumsan diam erat sit amet leo. Donec dignissim mi lacus, vel vehicula velit placerat a. Aenean
                        augue mauris, porta eu volutpat et, pharetra a eros. Maecenas non urna et mauris tempor
                        ultricies. Duis at varius nunc, ut consequat justo. Maecenas porta lorem blandit sem sodales,
                        quis fringilla mauris eleifend. Phasellus ac consequat diam, eget tempus magna. Morbi congue
                        augue sit amet tortor tincidunt, at dignissim diam sodales. Quisque eget convallis magna. Fusce
                        rutrum faucibus odio ut convallis.
                    </p>
                </div>
                <div className={"rounded-full h-96 w-96 bg-fuchsia-600 hover:scale-110 duration-150"}>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async () => {
    await dbConnect();
    const results = await Blog.find({}).select("slug title description")
        .then((blogs) => blogs.map((blog) => {
            blog = blog.toObject()
            blog._id = blog._id.toString()
            return (blog)
        }));
    return {
        props: {
            blogs: results
        }
    }
}