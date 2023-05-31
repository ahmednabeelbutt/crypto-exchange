import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';


const CreateBlogForm = ({ handleCreate, handleUpdate, initialValues }) => {
  
  const [title, setTitle] = useState(initialValues ? initialValues.title : '');
  const [subtitle, setSubtitle] = useState(initialValues ? initialValues.subtitle : '');
  const [author, setAuthor] = useState(initialValues ? initialValues.author : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      id: initialValues ? initialValues.id : uuidv4(),
      title,
      subtitle,
      author,
    };

    if (initialValues) {
      handleUpdate(blog);
      } else {
      handleCreate(blog);
    }

    // Reset the form fields
    handleClear();
  };

  const handleClear = (e) => {
    setTitle("");
    setSubtitle("");
    setAuthor("");
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="details" className="mt-4">
        <Form.Label>SubTitle</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Sub title"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="details" className="mt-4">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>
    
      <Button type="submit" className="mt-2">
          {initialValues ? 'Update Blog' : 'Create Blog'}
      </Button>
      <Button
        variant="outline-danger"
        className="mt-2"
        onClick={handleClear}
        style={{ marginLeft: "10px" }}
      >
        Clear
      </Button>
    </Form>
  );
};

export default CreateBlogForm;
