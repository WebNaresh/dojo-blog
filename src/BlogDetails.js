import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";


const BlogDetail = () => {

    const history = useHistory();
    const { id } = useParams();
    useFetch(id);
    const { data:blog, isPending, error } = useFetch("http://localhost:8000/Blogs/" + id);

    const handleClick= ()=>{
        fetch("http://localhost:8000/Blogs/"+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            <h2>
                Blog Details - {id}
                <br />
                <br />
            </h2>
            {isPending && <div>Loading ...</div> }
            {error && <div>{error}</div> }
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <br />
                    <p>Written by {blog.author} </p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick} >Delete</button>
                </article>


            )}
        </div>
    );
}

export default BlogDetail;