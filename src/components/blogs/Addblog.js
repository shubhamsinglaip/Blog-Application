import React,{useState} from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
const Addblog=()=>{






    let navigate=useNavigate();
    const [blog,setBlog]=useState({
        //*id:"",
        title:"",
        body:"",
        author:""
    })

    const {title,body,author}=blog;
    const onInputChange = (e)=>{
        setBlog({ ...blog,[e.target.name]:e.target.value})




    }
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3005/blogPosts",blog)
        navigate("/")

    }
    return(

        <div className="container">
            <div className ="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a Blog</h2>
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
                                defaultValue={id}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
    */}

                        <div className="form-group">
                        <Label for="title" >Post Title</Label>
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
                            <Label for="content" >Post Content</Label>
                            <Input
                            id="content"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter here"
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
                        
                    <Button type="submit"className="btn btn-primary btn">Add Blog</Button>

                </Form>


            </div>
        </div>
       
    )
}
export default Addblog;