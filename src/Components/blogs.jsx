import React, { useState } from "react";
import BlogsTable from "./blogs-table-view";

function Blog() {
  const defaultBlogs = [
    {   
        id: '123-abc-xyz',
        title: "Tesla's stock price falls after bitcoin backtrack",
        subtitle: "Tesla's stock",
        author: "Tesla",
    },

  ];
  const [blogs, setBlogs] = useState(defaultBlogs);
 
  const handleAddBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const handleUpdateBlog = (blog, index) => {
    let updatedBlogs = [...blogs];
    updatedBlogs[index] = blog;
    setBlogs(updatedBlogs);

   
  };
  const handleDeleteBlog = (index) => {
    let updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <>
        <BlogsTable blogs={blogs} handleCreate={handleAddBlog} handleUpdate={handleUpdateBlog} handleDelete={handleDeleteBlog} />
    </>
  );
}

export default Blog;
