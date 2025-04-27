import React from 'react'
import { useState } from 'react'
function Chectout() {
    const[formData,seFormData]=useState({name:'',email:'',phone:'',messsage:''});

    const handleChange=(e)=>{
      seFormData({...formData,[e.target.name]:e.target.value});
    };


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted",formData);
    };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    <label className="block mb-2">Name:</label>
    <input type="text" name="name" onChange={handleChange} className="input-field" required />

    <label className="block mb-2">Phone:</label>
    <input type="tel" name="phone" onChange={handleChange} className="input-field" required />

    <label className="block mb-2">Email:</label>
    <input type="email" name="email" onChange={handleChange} className="input-field" required />

    <label className="block mb-2">Message:</label>
    <textarea name="message" onChange={handleChange} className="input-field" />

    <button type="submit" className="btn-primary mt-4">Submit</button>
  </form>  
     
     )
}

export default Chectout