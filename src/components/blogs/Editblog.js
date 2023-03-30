import React,{useState, useEffect} from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'; 
const Editblog=()=>{
    let navigate=useNavigate();
    const {id}=useParams();
    const [blog,setBlog]=useState({
        title:"",
        body:"",
        author:""
    })
    const {title,body,author}=blog;
    const onInputChange = (e)=>{
        setBlog({...blog,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadBlog();

    },[])
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3005/blogPosts/${id}`,blog);
        navigate("/");

    }
    const loadBlog = async()=>{
        const result= await axios.get(`http://localhost:3005/blogPosts/${id}`)
        setBlog(result.data)
    }
    


    return(
            
        <div className="container">
            <div className ="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a Blog</h2>
                <Form onSubmit={e=>onSubmit(e)}>
                    {/*
                                
                                
            
                            
                        <div className="form-group">
                        <Label for="uid" >User Id</Label>
                            <Input
                                id="uid"
                                type="text"
                                placeholder="Enter User Id here"
                                className="form-control form-control-lg"
                                name="id"
                                //onChange={fieldChanged}
                                defaultValue={uid}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
    */}

                        <div className="form-group">
                        <Label for="title" >Edit Title</Label>
                             <input
                             id="title"
                                type="text"
                                placeholder="Enter title here"
                                className="form-control form-control-lg"
                                name="title"
                                defaultValue={title}
            onChange={e=>onInputChange(e)}
                            />
                            </div>
                            <div className="">
                            <Label for="content" >Edit Content</Label>
                            <Input
                            id="content"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter content here"
                                name="body"
                                //onChange={fieldChanged}
                                defaultValue={body}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                        <Label for="author" >Author</Label>
                            <Input
                                id="author"
                                type="text"
                                placeholder="Enter Author here"
                                className="form-control form-control-lg"
                                name="author"
                                //onChange={fieldChanged}
                                defaultValue={author}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
                    <Button type="submit" className="btn btn-primary btn">Edit Blog</Button>

                </Form>


            </div>
        </div>

    )
}
export default Editblog;