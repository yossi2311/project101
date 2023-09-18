import React, { useState } from "react";
import "./Addflights.css"; // Import the CSS file

function AddFlights() {
  const [formData, setFormData] = useState({
    airlineCompany: "",
    originCountry: "",
    destinationCountry: "",
    departureTime: "",
    landingTime: "",
    remainingTickets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="add-flights-container">
      <h1>Add New Flight</h1>
      <form className="add-flights-form" onSubmit={handleSubmit}>
        <label htmlFor="airlineCompany">Airline Company:</label>
        <input
          type="text"
          id="airlineCompany"
          name="airlineCompany"
          value={formData.airlineCompany}
          onChange={handleChange}
          required
        />

        <label htmlFor="originCountry">Origin Country:</label>
        <input
          type="text"
          id="originCountry"
          name="originCountry"
          value={formData.originCountry}
          onChange={handleChange}
          required
        />

        <label htmlFor="destinationCountry">Destination Country:</label>
        <input
          type="text"
          id="destinationCountry"
          name="destinationCountry"
          value={formData.destinationCountry}
          onChange={handleChange}
          required
        />

        <label htmlFor="departureTime">Departure Time:</label>
        <input
          type="text"
          id="departureTime"
          name="departureTime"
          value={formData.departureTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="landingTime">Landing Time:</label>
        <input
          type="text"
          id="landingTime"
          name="landingTime"
          value={formData.landingTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="remainingTickets">Remaining Tickets:</label>
        <input
          type="text"
          id="remainingTickets"
          name="remainingTickets"
          value={formData.remainingTickets}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Add Flight
        </button>
      </form>
    </div>
  );
}

export default AddFlights;
