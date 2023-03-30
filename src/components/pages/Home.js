import React,{useState,useEffect} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link ,NavLink} from 'react-router-dom'

const Home=()=>{
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        loadBlog();

    },[])
    const loadBlog = async()=>{
        const result= await axios.get("http://localhost:3005/blogPosts")
        setBlogs(result.data)
    }

    const deleteBlog = async(id)=>{
      await axios.delete(`http://localhost:3005/blogPosts/${id}`)
      loadBlog();
  }
  

    return(
<div className="container">
    <h1>Home Page</h1>
    


    <Table striped bordered hover>
      <thead>
        <tr className='bg-dark text-white p-2'>
          <th>#</th>
          {/*<th>User Id</th>*/}
          <th>Title</th>
          <th>Body</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody >
        {blogs.map((blog,index)=>(
            <tr className='p-2'>
            <th scope="row">{index+1}</th>
            {/*<td>{blog.userId}</td>*/}
            <td>{blog.title}</td>
            <td>{blog.body}</td>
            {/*<td>{blog.author}</td>*/}
            <td>{localStorage.getItem("title")}</td>
            <td>
                <Link className='btn btn-primary m-2' to={`/blog/${blog.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
                <Link className='btn btn-primary m-2' to={`/edit/${blog.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                <Link className='btn btn-danger m-2'onClick={()=>{deleteBlog(blog.id)}}>Delete</Link>


            </td>
            </tr>
        ))}
        
      </tbody>
    </Table>
</div>
    )
}
export default Home;