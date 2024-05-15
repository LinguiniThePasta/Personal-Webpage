import Blog from "@/model/Blog";

export default async function handler (req, res) {
    const query = req.query.q;

    if (!query) {
        const results = await Blog.find({}).select("slug title description")
            .then( (blogs) => blogs.map( (blog) => {
                blog = blog.toObject()
                blog._id = blog._id.toString()
                return (blog)
            }) );
        res.status(200).json(results);
    }
    const results = await Blog.aggregate(
        [
            {
                $search: {
                    index: "blog-search",
                    text: {
                        query: query,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            }
        ]
    )
    res.status(200).json(results);
}