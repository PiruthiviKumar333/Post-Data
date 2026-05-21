import { useParams, Link } from 'react-router-dom'
const Postpage = ({ posts, handleDelete }) => {

  const { id } = useParams()
  console.log(id);
  
  const post = posts.find((post) => (post.id).toString()===id)

  console.log(post);
  

  return (
    <div className='postpage'>
      {
        post && <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h2>{post.datetime}</h2>
          <img src={post.image} alt="..." />
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
        </div>
      }
      {
        !post && <div>
          <h1>404 - Page Not Found</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae consectetur voluptatibus quis reiciendis velit nobis
            veritatis dolorum error vel, nulla unde repellendus ratione
            aliquam vero ad modi quae, perspiciatis molestiae?</p>

          <Link to={"/"}>Home</Link>
        </div>
      }
    </div>
  )
}

export default Postpage