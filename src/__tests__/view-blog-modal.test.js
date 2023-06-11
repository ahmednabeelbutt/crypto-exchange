import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ViewBlogModal from '../Components/view-blog-modal';

describe('ViewBlogModal', () => {
  const blog = {
    id: '123-abc-xyz',
    title: "Tesla's stock price falls after bitcoin backtrack",
    subtitle: "Tesla's stock",
    author: 'Tesla',
  };

  it('displays the blog details in the modal', () => {
    render(
      <ViewBlogModal blog={blog} show={true} handleClose={() => {}} />
    );

    const modalTitle = screen.getByText(
      "Tesla's stock price falls after bitcoin backtrack"
    );
    expect(modalTitle).toBeInTheDocument();

    const modalSubtitle = screen.getByText("Tesla's stock");
    expect(modalSubtitle).toBeInTheDocument();

    const modalAuthor = screen.getByText('Author: Tesla');
    expect(modalAuthor).toBeInTheDocument();
  });

  it('calls handleClose when the close button is clicked', () => {
    const mockHandleClose = jest.fn();

    render(
      <ViewBlogModal blog={blog} show={true} handleClose={mockHandleClose} />
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the modal when the blog prop is null', () => {
    render(<ViewBlogModal blog={null} show={true} handleClose={() => {}} />);

    const modalTitle = screen.queryByText(
      "Tesla's stock price falls after bitcoin backtrack"
    );
    expect(modalTitle).not.toBeInTheDocument();
  });
});
