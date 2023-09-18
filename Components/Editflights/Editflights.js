import React, { useState } from "react";
import "./Editflights.css"; // Import your CSS file here

function EditFlights() {
  const [formData, setFormData] = useState({
    flightNumber: "",
    airlineCompany: "",
    originCountry: "",
    destinationCountry: "",
    departureTime: "",
    landingTime: "",
    remainingTickets: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleRemove = () => {
    // Handle flight removal logic here
    console.log("Flight removed");
  };

  const handleUpdate = () => {
    // Handle flight update logic here
    console.log("Flight updated");
  };

  return (
    <div className="edit-flights-container">
      <h1>Edit Flight</h1>
      <form className="edit-flights-form" onSubmit={handleSubmit}>
        {/* Form fields go here (same as before) */}

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>

      {/* Buttons for Remove and Update */}
      <div className="button-container">
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditFlights;
