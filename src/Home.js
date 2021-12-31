import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'lorem ......', author: "marybhai", id: '1' },
        { title: 'Happy New Year', body: 'lorem ......', author: "hellobhai", id: '2' },
        { title: 'My Web Tips', body: 'lorem ......', author: "vadubhai", id: '3' },
        { title: 'My Web Tips', body: 'lorem ......', author: "vadubhai", id: '4' },
        { title: 'My Web Tips', body: 'lorem ......', author: "vadubhai", id: '5' },
        { title: 'My Web Tips', body: 'lorem ......', author: "vadubhai", id: '6' },
        { title: 'My Web Tips', body: 'lorem ......', author: "vadubhai", id: '7' }
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <p>{blog.body}</p>
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Home;