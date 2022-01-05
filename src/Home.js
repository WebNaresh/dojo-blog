import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {

    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/Blogs');

    
    return (
        <div className="home">
            { error && <div>{error}</div> }
            {isPending && <div>Loading.....</div> }
            {blogs && <Bloglist blogs={blogs} title='All Blogs'></Bloglist>}
        </div>
    );
}

export default Home;