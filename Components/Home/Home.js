import React from "react";
import "./Home.css"; // Import the CSS file



function Home() {
  return (
    <div>
      <header>
        <h1>Where Are You Flying to Today?</h1>
      </header>
      <section id="search-section">
        <form>
          <label htmlFor="from">Departure City:</label>
          <input type="text" id="from" name="from" placeholder="Enter your departure city" />

          <label htmlFor="Airline_Company_Id">Airline Company ID:</label>
          <input type="text" id="Airline_Company_Id" name="Airline_Company_Id" required />

          <label htmlFor="Origine_Country_Id">Origin Country ID:</label>
          <input type="text" id="Origine_Country_Id" name="Origine_Country_Id" required />

          <label htmlFor="Destination_Country_Id">Destination Country ID:</label>
          <input type="text" id="Destination_Country_Id" name="Destination_Country_Id" required />

          <label htmlFor="Departure_Time">Departure Time:</label>
          <input type="tel" id="Departure_Time" name="Departure_Time" required />

          <label htmlFor="Landing_Time">Landing Time:</label>
          <input type="text" id="Landing_Time" name="Landing_Time" required />

          <label htmlFor="Remaining_Tickets">Remaining Tickets:</label>
          <input type="text" id="Remaining_Tickets" name="Remaining_Tickets" required />

          <input type="submit" value="Search Flights" />
        </form>
      </section>
      <section id="composition-section">
        <h2>Your Travel Composition</h2>
        {/* Add content for the composition section here */}
      </section>
    </div>
  );
}

export default Home;
