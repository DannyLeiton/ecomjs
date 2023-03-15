import React, { useState } from "react"
import axios from 'axios'


export default ({ postId }) => {
  const [content, setContent] = useState('') 

  const onSubmit = async(event) => {
    event.preventDefault()

    if (content) {
      await axios.post(
        `http://localhost:4001/posts/${postId}/comments`,
        {content}
      )
      setContent('')
    }
    else
      alert('Add some comment content')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}