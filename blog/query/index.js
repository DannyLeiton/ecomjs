const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

//import eventTypes from './eventTypes'

/*
Expected JSON:
posts ===
{
  'j124g4r4': {
    id: 'j124g4r4',
    title: 'post title',
    comments: [
      { id: 'klkr2k31', content: 'comment!' },
      { id: 'jl1r2k51', content: 'comment 2!' },
      { id: 'jl134k51', content: 'comment 3!' }
    ]
  },
  'j124g4r5': {
    ...
  },
  'j124g4r46': {
    ...
  }
}
*/

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  const {type, data} = req.body

  if (type === 'PostCreated') {
    const { id, title } = data

    posts[id] = { id, title, comments: []}
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data

    const post = posts[postId]

    post.comments.push({ id, content })
  }

  console.log(posts)

  res.send({})
})

app.listen(4002, () => {
  console.info('Listening on port 4002')
})