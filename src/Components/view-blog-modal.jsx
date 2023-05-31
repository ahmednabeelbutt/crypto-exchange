import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ViewBlogModal ({ blog, show, handleClose }) {
    if (!blog) {
        return null; 
    }
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{blog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4><b>Subtitle: </b>{blog.subtitle}</h4>
          <p><b>Author: </b>{blog.author}</p>
        </Modal.Body>
      </Modal>
    );
  };

export default ViewBlogModal;