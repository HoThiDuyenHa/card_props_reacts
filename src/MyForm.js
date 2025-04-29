import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState(''); 

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(name); 
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello {submittedName}</h1>
      <input placeholder="Enter your name" value={name} onChange={handleChange} />
      <button type="submit">Gửi</button>
    </form>
  );
}

export default MyForm;
