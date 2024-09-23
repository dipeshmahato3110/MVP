// components/SubmitApparelForm.js
import React, { useState } from "react";
import axios from "axios";

const SubmitApparelForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    condition: "",
    preferredOption: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/apparel/submit", {
        method:"POST", 
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData),
      });
      alert("Submission Successful!");
      console.log(response);
    } catch (error) {
      console.error("There was an error submitting!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Category:</label>
      <input type="text" name="category" value={formData.category} onChange={handleChange} required />

      <label>Condition:</label>
      <input type="text" name="condition" value={formData.condition} onChange={handleChange} required />

      <label>Preferred Option:</label>
      <select name="preferredOption" value={formData.preferredOption} onChange={handleChange} required>
        <option value="">Select Option</option>
        <option value="Recycle">Recycle</option>
        <option value="Donate">Donate</option>
        <option value="Dispose">Dispose</option>
      </select>

      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitApparelForm;
