import React, { useState, useEffect } from 'react';

function About() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Oldindan yozilgan kommentlar
  const preloadedComments = [
    { text: "This site is amazing! The desserts look fantastic.", id: Date.now() + Math.random() },
    { text: "I love the variety of desserts available. Great job!", id: Date.now() + Math.random() },
    { text: "Fantastic recipes and easy to follow. Thank you!", id: Date.now() + Math.random() }
  ];

  useEffect(() => {
    // Load comments from localStorage or use preloaded comments if none exist
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    if (savedComments) {
      setComments(savedComments);
    } else {
      // Set preloaded comments if no comments in localStorage
      setComments(preloadedComments);
    }
  }, []);

  useEffect(() => {
    // Save comments to localStorage whenever they change
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, id: Date.now() }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="main-container my-12 w-full">
      <h1 className="text-4xl capitalize font-bold text-center mb-10">
        Let us know <span className="text-orange-500">what you think of us</span>
      </h1>

      <div className="w-10/12 mx-auto">
        <label className="form-control">
          <div className="label">
            <span className="label-text capitalize text-2xl font-semibold ml-3">Comment your opinion</span>
          </div>
          <textarea
            className="textarea textarea-bordered mb-4 h-40 text-lg resize-none"
            placeholder="Type Here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </label>
        <button
          className="btn hover:bg-[#a65f13] bg-[#DC780B] text-white font-medium text-base capitalize"
          onClick={handleAddComment}
        >
          Set Comment
        </button>
      </div>

      <div className="mt-[40px]">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`chat ${preloadedComments.some(pre => pre.text === comment.text) ? 'chat-start' : 'chat-end'}`}
          >
            <div className="chat-bubble">
              {comment.text}
              {!preloadedComments.some(pre => pre.text === comment.text) && (
                <button
                  className="delete-comment"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  🗑️
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;