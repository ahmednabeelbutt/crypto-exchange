import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CreateBlogForm from './CreateBlogForm';

const BlogModal = ({ showModal, handleClose, handleCreate, initialValues }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{initialValues ? 'Edit Blog' : 'Create Blog'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateBlogForm handleCreate={handleCreate} initialValues={initialValues} />
      </Modal.Body>
    </Modal>
  );
};

export default BlogModal;