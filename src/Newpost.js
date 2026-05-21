import React from 'react'

const Newpost = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit,postImage,setPostImage}) => {
  return (
    <div className='new'>
      <form className='newpost' onSubmit={handleSubmit}>
        <label>Enter Your Title :</label>
        <input type="text" 
        autoFocus
        maxLength={15}
        placeholder='Title'
        value={postTitle}
        onChange={(e)=> setPostTitle(e.target.value)}
        />
        <label>Upload Image :</label>
        <input type="file" 
        // accept='image/*'
        // files={postImage}
        onChange={(e)=> setPostImage(e.target.files[0])}
        />

        <label>Enter Your Body :</label>
        <textarea
        placeholder='Body'
        value={postBody} 
        onChange={(e)=> setPostBody(e.target.value)}
        ></textarea>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Newpost