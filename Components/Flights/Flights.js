import React, { useState,  } from "react";
import "./Flights.css"; // Import the CSS file

function Flights() {
  // Sample flight data (you can replace this with your actual data)
  const [flights] = useState([
    {
      id: 1,
      flightNumber: "FL123",
      airlineCompany: "Airline A",
      originCountry: "Country X",
      destinationCountry: "Country Y",
      departureTime: "08:00 AM",
      landingTime: "10:00 AM",
      remainingTickets: 50,
    },
    {
      id: 2,
      flightNumber: "FL456",
      airlineCompany: "Airline B",
      originCountry: "Country Z",
      destinationCountry: "Country W",
      departureTime: "10:30 AM",
      landingTime: "12:30 PM",
      remainingTickets: 25,
    },
    // Add more flight data as needed
  ]);

  return (
    <div className="flights-container">
      <h1>Flight Information</h1>
      <table className="flights-table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline Company</th>
            <th>Origin Country</th>
            <th>Destination Country</th>
            <th>Departure Time</th>
            <th>Landing Time</th>
            <th>Remaining Tickets</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.airlineCompany}</td>
              <td>{flight.originCountry}</td>
              <td>{flight.destinationCountry}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.landingTime}</td>
              <td>{flight.remainingTickets}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new flight */}
      <button className="add-flight-button">Add Flight</button>
    </div>
  );
}

export default Flights;
