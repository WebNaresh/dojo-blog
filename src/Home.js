import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";

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

    const [name,setName] = useState('mario');
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran');
        console.log(blogs);
        console.log(name);
    },[name]);
    return (
        <div className="home">
            <Bloglist blogs={blogs} title = 'All Blogs' handleDelete={handleDelete}></Bloglist>
            <button onClick={()=> setName('luigu')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;