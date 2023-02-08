import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [studySpace, setStudySpace] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/review/', {
      study_space: studySpace,
      rating: rating,
      description: description,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <form onSubmit={handleSubmit} class="container bg-dark col-sm-4 text-warning text-center form-container" style={{marginTop: "400px"}}>
      <label>
        Study Space:
        <input type="text" class="form-control" value={studySpace} onChange={e => setStudySpace(e.target.value)} />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" class="form-control" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea class="form-control" rows="15" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit" class = "btn btn-success">Submit</button>
    </form>
  );
}

export default ReviewForm;