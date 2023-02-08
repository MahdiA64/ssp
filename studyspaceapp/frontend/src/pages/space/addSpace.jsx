import React, { useState } from 'react';
import axios from 'axios';

function CreateStudySpace() {
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [floor, setFloor] = useState('');
    const [groupSpace, setGroupSpace] = useState(false);
    const [pcAvailable, setPCAvailable] = useState(false);
    const [poweredSeating, setPoweredSeating] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await axios.post('http://localhost:8000/studyspaces/', {
            name,
            capacity,
            floor,
            group_space: groupSpace,
            pc_available: pcAvailable,
            powered_seating: poweredSeating
          });
          console.log(res);
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            <input type="number" placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} />
            <label>
              <input type="checkbox" checked={groupSpace} onChange={(e) => setGroupSpace(e.target.checked)} />
              Group Space
            </label>
            <label>
              <input type="checkbox" checked={pcAvailable} onChange={(e) => setPCAvailable(e.target.checked)} />
              PC Available
            </label>
            <label>
              <input type="checkbox" checked={poweredSeating} onChange={(e) => setPoweredSeating(e.target.checked)} />
              Powered Seating
            </label>
            <button type="submit">Create Study Space</button>
        </form>
    );
}

export default CreateStudySpace;