import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [title, setTitle] = useState('')

  const url = 'http://localhost:4000/posts'

  const onSubmit =  async (event) => {
    event.preventDefault()

    if (title) {
      await axios.post(url, {title})
      setTitle('')
    }
    else
      alert('Add some post title')
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='form-control'
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  </div>
}