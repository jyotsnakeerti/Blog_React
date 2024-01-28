import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// using react-quill for text-editor 

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title'/>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{display:"none"}} type="file" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name='cat' value="recipe" id="recipe"/>
          <label htmlFor="recipe">Recipe</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="travel" id="travel"/>
          <label htmlFor="travel">Travel</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="lifestyle" id="lifestyle"/>
          <label htmlFor="lifestyle">Lifestyle</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="craft" id="craft"/>
          <label htmlFor="craft">Craft</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="fashion" id="fashion"/>
          <label htmlFor="fashion">Fashion</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
