import Nav from './Nav'
import Footer from './Footer'
import Newpost from './Newpost'
import Postpage from './Postpage'
import About from './About'
import Header from './Header'
import Home from './Home'
import '../src/App.css'
import Missing from './Missing'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Route, Routes, useNavigate } from 'react-router-dom'
import api from "./api/posts"
import EditPost from './EditPost'

function App() {
  const title = "PRITHIVI"
  const subTitle = "REACT-JS"
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, serSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [postImage, setPostImage] = useState(null)
  const [editImage, setEditImage] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/posts")
        setPosts(response.data);
      }
      catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(err.message);
        }
      }
    }
    fetchData()
  }, [])


  useEffect(() => {
    const fetchData = posts.filter((post) => {
      return (post.title).toLowerCase().includes(search.toLowerCase()) ||
        (post.body).toLowerCase().includes(search.toLowerCase())
    })
    serSearchResults(fetchData.reverse())
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd,yyyy pp')
    const image = URL.createObjectURL(postImage)
    const newPost = { id, datetime, title: postTitle, body: postBody, image: image }
    try {
      const response = await api.post("/posts", newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
      setPostTitle('')
      setPostBody('')
      setPostImage('')
    }
    catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
      else {
        console.log(err.message);
      }
    }
  }
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      console.log(id)

      const postList = posts.filter((post) => post.id !== id)

      setPosts(postList)
      navigate("/")
    }
    catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
      else {
        console.log(err.message);
      }
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd,yyyy pp')
    const image = URL.createObjectURL(editImage)
    const updateData = { id, datetime, title: editTitle, body: editBody, image: image }
    if (editTitle) {
      try {
        const response = await api.put(`/posts/${id}`, updateData)
        setPosts(posts.map((post) => post.id === id ? { ...response.data } : post))
        setEditTitle('')
        setEditBody('')
        setEditImage('')
        navigate("/")
      }
      catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(err.message);
        }
      }
    }
  }



  return (
    <div className='app'>
        <Nav
          title={title}
          subTitle={subTitle}
        />
        <Header
          search={search}
          setSearch={setSearch} />
        <Routes>
          <Route path={'/'} element={<Home
            posts={searchResults}
            setposts={setPosts}
          />} />
          <Route path={'/about'} element={<About />} />

          <Route path={'/posts'}>
            <Route index element={<Newpost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              setPostBody={setPostBody}
              postBody={postBody}
              postImage={postImage}
              setPostImage={setPostImage}
              handleSubmit={handleSubmit}
            />} />
            <Route path={':id'} element={<Postpage posts={posts} handleDelete={handleDelete} />} />
          </Route>
          <Route path='/edit/:id' element={<EditPost
            posts={posts}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
            editImage={editImage}
            setEditImage={setEditImage}
            handleEdit={handleEdit}
          />
          } />

          <Route path={'*'} element={<Missing />} />



        </Routes>

        <Footer />
    </div>
  )
}


export default App
