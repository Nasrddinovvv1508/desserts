import React from 'react';

const cookbooks = [
  { id: 1, title: 'Dessert Delights', author: 'Jane Doe' },
  { id: 2, title: 'Sweet Treats', author: 'John Smith' },
  { id: 3, title: 'The Dessert Bible', author: 'Mary Johnson' }
];

function Books() {
  return (
    <div className="main-container books-page">
      <h1 className="text-4xl font-bold text-center mb-8">Books on Dessert Making</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cookbooks.map(book => (
          <div key={book.id} className="book-card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;