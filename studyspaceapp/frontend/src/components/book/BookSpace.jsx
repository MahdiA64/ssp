// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// // import { TokenContext } from "../../components/token/Token";

// function BookingForm() {
//   const { token } = useContext(TokenContext);
//   const [formData, setFormData] = useState({
//     user: '',
//     start_time: '',
//     end_time: '',
//     group_space: false,
//     pc_required: false,
//     powered_seating: false,
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox" ? setFormData({ ...formData, [name]: checked }) : setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const config = {
//       headers: {
//           'Authorization': `Token ${token}`
//       }
//   };
//     axios.post('http://localhost:8000/api/booking/', formData, config)
//       .then((res) => {
//         console.log(res);
//         setFormData({
//           user: '',
//           start_time: '',
//           end_time: '',
//           group_space: false,
//           pc_required: false,
//           powered_seating: false,
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         User Email:
//         <input
//           type="email"
//           name="user"
//           value={formData.user}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Start Time:
//         <input
//           type="datetime-local"
//           name="start_time"
//           value={formData.start_time}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         End Time:
//         <input
//           type="datetime-local"
//           name="end_time"
//           value={formData.end_time}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Group Space:
//         <input
//           type="checkbox"
//           name="group_space"
//           checked={formData.group_space}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         PC Required:
//         <input
//           type="checkbox"
//           name="pc_required"
//           checked={formData.pc_required}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Powered Seating:
//         <input
//           type="checkbox"
//           name="powered_seating"
//           checked={formData.powered_seating}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default BookingForm;

import React, { useState } from 'react';

const BookingForm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [groupSpace, setGroupSpace] = useState(false);
  const [pcRequired, setPcRequired] = useState(false);
  const [poweredSeating, setPoweredSeating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send a POST request to your API with the following data:
    const data = {
      start_time: startTime,
      end_time: endTime,
      group_space: groupSpace,
      pc_required: pcRequired,
      powered_seating: poweredSeating
    };

    // Example using the fetch API:
    fetch('http://localhost:8000/api/book/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="start-time">Start Time:</label>
        <input
          type="datetime-local"
          id="start-time"
          value={startTime}
          onChange={event => setStartTime(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="end-time">End Time:</label>
        <input
          type="datetime-local"
          id="end-time"
          value={endTime}
          onChange={event => setEndTime(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="group-space">Group Space:</label>
        <input
          type="checkbox"
          id="group-space"
          checked={groupSpace}
          onChange={event => setGroupSpace(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="pc-required">PC Required:</label>
        <input
          type="checkbox"
          id="pc-required"
          checked={pcRequired}
          onChange={event => setPcRequired(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="powered-seating">Powered Seating:</label>
        <input
          type="checkbox"
          id="powered-seating"
          checked={poweredSeating}
          onChange={event => setPoweredSeating(event.target.checked)}
        />
      </div>
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default BookingForm;