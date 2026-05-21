import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit,editImage,setEditImage}) => {
    const {id} = useParams()
    const post = posts.find((post)=> (post.id).toString()===id)

    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
            setEditImage(post.image)
        }
    },[post,setEditBody,setEditTitle,setEditImage])
  return (
   <div className='new'>
      <form className='newpost' onSubmit={(e)=>e.preventDefault()}>
        <label>Enter Your Title :</label>
        <input type="text" 
        autoFocus
        maxLength={15}
        placeholder='Title'
        value={editTitle}
        onChange={(e)=> setEditTitle(e.target.value)}
        />
        <label>Upload Image :</label>
        <input type="file" 
        // accept='image/*'
        // files={editImage}
        onChange={(e)=> setEditImage(e.target.files[0])}
        />
        <label>Enter Your Body :</label>
        <textarea
        placeholder='Body'
        value={editBody} 
        onChange={(e)=> setEditBody(e.target.value)}
        ></textarea>

        <button onClick={()=>handleEdit(post.id)}>Submit</button>
      </form>
    </div>
  )
}

export default EditPost