import Blog from "@/model/Blog";

export default async function handler(req, res) {
    const query = req.query.q;

    if (!query) {
        const results = await Blog.find({}).select("slug title description")
            .then((blogs) => blogs.map((blog) => {
                blog = blog.toObject()
                blog._id = blog._id.toString()
                return (blog)
            }));
        res.status(200).json(results);
    } else {
        const results = await Blog.aggregate()
            .search({
                // queryString: { defaultPath: "title", query: args },
                text: {
                    query: query,
                    path: ["slug", "title", "body"],
                    fuzzy: {"maxEdits": 2},
                    score: { "boost": { "value": 3 } }
                },
                index: "blog-search",
            });
        res.status(200).json(results);
    }

}