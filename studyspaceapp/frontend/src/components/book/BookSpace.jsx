import React, { useState } from 'react';
import {createBook} from '../../api/book';
function BookingForm() {
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [group_space, setGroupSpace] = useState(false);
  const [pc_required, setPcRequired] = useState(false);
  const [powered_seating, setPoweredSeating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      start_time: start_time,
      end_time: end_time,
      group_space: group_space,
      pc_required: pc_required,
      powered_seating: powered_seating
    };
    createBook(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start time:
        <input type="datetime-local" value={start_time} onChange={e => setStartTime(e.target.value)} />
      </label>
      <br />
      <label>
        End time:
        <input type="datetime-local" value={end_time} onChange={e => setEndTime(e.target.value)} />
      </label>
      <br />
      <label>
        Group space:
        <input type="checkbox" checked={group_space} onChange={e => setGroupSpace(e.target.checked)} />
      </label>
      <br />
      <label>
        PC required:
        <input type="checkbox" checked={pc_required} onChange={e => setPcRequired(e.target.checked)} />
      </label>
      <br />
      <label>
        Powered seating:
        <input type="checkbox" checked={powered_seating} onChange={e => setPoweredSeating(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Create booking</button>
    </form>
  );
}

export default BookingForm;