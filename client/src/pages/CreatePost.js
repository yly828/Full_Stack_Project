import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };
    const onSubmit = (data)=> {
        //console.log(data);
        axios.post("http://localhost:3001/posts", data).then((response) => {
            // console.log(response.data);
            console.log("it worked!");
            //setlistOfPosts(response.data);
      
          });

    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText:Yup.string().required(),
        username: Yup.string().min(3,"The minium length is 3").max(15,"The maxium length is 15").required("You have to give a username!")
    })

  return (
   
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title: </label>
                <Field autoComplete="off" id="inputCreatePost" name="title" placeholder='(Ex. New Title...)'/> 
                <ErrorMessage name="title" component="span"/>
                <label>Post: </label>
                <Field autoComplete="off" id="inputCreatePost" name="postText" placeholder='(Ex. This is a book)'/> 
                <ErrorMessage name="postText" component="span"/>
                <label>Username: </label>
                <Field id="inputCreatePost" name="username" placeholder='(Ex. John...)'/> 
                <ErrorMessage name="username" component="span"/>
                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost

//name 要跟database裡面的attributes名稱完全相同