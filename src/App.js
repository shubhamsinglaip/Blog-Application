import logo from "./logo.svg";
import "./App.css";
import AddPost from "./components/layout/AddPost";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Post from "./components/Post/Post";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PageNotFound from "./components/pages/PageNotFfound";
import Addblog from "./components/blogs/Addblog";
import Editblog from "./components/blogs/Editblog";
import Blog from "./components/blogs/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/addpost" element={<AddPost></AddPost>}></Route>
          <Route exact path="/post" element={<Posts></Posts>}></Route>
          <Route exact path="/addblog" element={<Addblog></Addblog>}></Route>
          <Route exact path="/edit/:id" element={<Editblog></Editblog>}></Route>
          <Route exact path="/blog/:id" element={<Blog></Blog>}></Route>
          <Route exact path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

        {/*<Post></Post>*/}
      </div>
    </Router>
  );
}

export default App;
