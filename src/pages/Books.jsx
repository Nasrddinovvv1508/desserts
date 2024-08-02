import React from 'react'

const cookbooks = [
  { id: 1, title: 'Dessert Delights', author: 'Jane Doe' },
  { id: 2, title: 'Sweet Treats', author: 'John Smith' },
  { id: 3, title: 'The Dessert Bible', author: 'Mary Johnson' }
]

function Books() {
  return (
    <div className="books-page">
      <h1>Books on Dessert Making</h1>
      <ul className="books-list">
        {cookbooks.map(book => (
          <li key={book.id} className="book">
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books