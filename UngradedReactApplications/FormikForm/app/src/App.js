import React from 'react';
import { useFormik } from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input 
          name="name" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.name} 
        />
        <div>Email</div>
        <input 
          name="email" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.email} 
        />
        <div>Password</div>
        <input 
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
