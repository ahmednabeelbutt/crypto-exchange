import {React, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateBlogForm from './create-blog';
import ViewBlogModal from './view-blog-modal';

function BlogsTable ({ blogs, handleCreate, handleUpdate, handleDelete }) {

    const [editIndex, setEditIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);

    const handleEdit = (index) => {
        // Handle edit action
        setEditIndex(index);
        setShowModal(true);
        console.log(`Edit blog at index ${index}`);
    };

    const handleDeleteBlog = (index) => {
        // Handle delete action
        handleDelete(index);
        console.log(`Delete blog at index ${index}`);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleCreateBlog = (blogData) => {
        handleCreate(blogData);
        setShowModal(false);
    };


    const handleUpdateBlog = (blogData) => {
        handleUpdate(blogData, editIndex);
        setShowModal(false);
        setEditIndex(null);
    };

    const handleViewBlog = (index) => {
        // Handle delete action
        setEditIndex(index);
        setShowViewModal(true);
    };

    const handleCloseViewModal = () => {
        setEditIndex(null);
        setShowViewModal(false);
    };

    return (
    <>
        <Button variant="success" className="mt-3 mb-3 rounded-circle" onClick={handleModalOpen}>+</Button>
        
        <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editIndex !== null ? 'Edit Blog' : 'Create Blog'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateBlogForm  handleCreate={handleCreateBlog} handleUpdate={handleUpdateBlog} initialValues={editIndex !== null ? blogs[editIndex] : null} />
            </Modal.Body>
        </Modal>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Unique ID</th>
                    <th>Title</th>
                    <th>SubTitle</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog, index) => (
                <tr key={index}>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.subtitle}</td>
                    <td>{blog.author}</td>
                    <td>
                        <Button variant="secondary" onClick={() => handleViewBlog(index)}>View</Button>{' '}
                        <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => handleDeleteBlog(index)}>Delete</Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        <ViewBlogModal
            blog={editIndex !== null ? blogs[editIndex] : null}
            show={showViewModal}
            handleClose={handleCloseViewModal}
        />
    </>
    );
};

export default BlogsTable;
