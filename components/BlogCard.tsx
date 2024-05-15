import Link from "next/link";

const BlogCard = ({path, blog}) => {
    // console.log(blog);
    return (
        <>
            <Link className={"flex-col flex-shrink-0 my-10 w-130 mx-10 min-w-96 hover:scale-110 duration-150"} href={{pathname: path, query: {slug: blog.slug}}}>
                <div className={"h-60 bg-emerald-600 rounded-t-lg"}>
                </div>
                <div className={"h-60 border-b-2 border-black border-l-2 border-r-2 rounded-b-lg"}>
                    <h1>
                        {blog.title}
                    </h1>
                    <p>
                        {blog.description}
                    </p>
                </div>
            </Link>

        </>
    )
}

export default BlogCard;