import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Home = (props) => {
  const [post,setPost] = useState([]);

  const formik = useFormik({
    initialValues:{
      title:'',
      body:''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label><br/>
          <input
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="title">Body</label><br/>
          <input
            id="body"
            name="body"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}


export default Home;