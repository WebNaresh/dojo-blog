import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
 setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
        if (!res.ok) {
            setBlogs(null)
            throw Error('could not fetch server is downed yet')
        }
        return res.json()
    })
    .then((data) => {
        setBlogs(data);
        setPending(false)
        setError(null)
    })
    .catch(err => {
        console.log(err);
        setError(err.message)
        setPending(false);
    })
 },(1000))
    }, []);
    return (
        <div className="home">
            { error && <div>{error}</div> }
            {isPending && <div>Loading.....</div> }
            {blogs && <Bloglist blogs={blogs} title='All Blogs'></Bloglist>}
        </div>
    );
}

export default Home;