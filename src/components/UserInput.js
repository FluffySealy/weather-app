import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function UserInput({ onSearch }) {
    const [location, setLocation] = useState('');

      const handleSubmit = () => {
        onSearch(location);
      };
    
      useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      });

  return (
    <div className="location-search">
      <label className="visually-hidden" htmlFor="locationsearch">
        Search Location:
      </label>
      <input
        value={location}
        onChange={event => setLocation(event.target.value)} //on updating the input, update the location state 
        type="text"
        placeholder='Search for a location'
        name="locationsearch"
        id="locationsearch"
        aria-label="Search"
      />
    </div>
  );
}
export default UserInput;

UserInput.propTypes = {
  };