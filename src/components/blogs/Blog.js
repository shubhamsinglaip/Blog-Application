import React,{useState, useEffect} from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import axios from 'axios';
import {useNavigate,useParams,Link} from 'react-router-dom'; 
const Blog=()=>{
    const [blog,setBlog]=useState({
        //id:"",
        title:"",
        body:"",
        author:""
    })
    const {id}=useParams();
    useEffect(()=>{
        loadBlog();

    },[])
    const loadBlog = async()=>{
        const res= await axios.get(`http://localhost:3005/blogPosts/${id}`)
        setBlog(res.data)
    }

    return(
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
            back to Home
            </Link>
            <h1 className="display-4">Id: {id}</h1>

            <hr></hr>
            <ul className="list-group w-50">
            <li className="list-grouop-item">Title: {blog.title}</li>
            <li className="list-grouop-item">Content: {blog.body}</li>
            <li className="list-grouop-item">Author: {blog.author}</li>
            </ul>
        </div>
    )
}
export default Blog;
