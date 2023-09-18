
import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import Home from "./Components/Home/Home.js";
import Flights from "./Components/Flights/Flights.js";
import Admin from "./Components/Admin";
import Signin from "./Components/Signin/Signin.js";
import AddFlights from "./Components/Addflights/Addflights.js";
import EditFlights from "./Components/Editflights/Editflights.js";



function App() {
  return (
    <Router>
      <Routes> {/* Replace 'Switch' with 'Routes' */}
        <Route path="/" element={<Home />} /> {/* Use 'element' prop */}  
        <Route path="/Flights" element={<Flights />} /> {/* Use 'element' prop */}
        <Route path="/admin" element={<Admin />} /> {/* Use 'element' prop */}
        <Route path="/signin" element={<Signin />} /> {/* Use 'element' prop */}
        <Route path="/addflights" element={<AddFlights />} /> {/* Use 'element' prop */}
        <Route path="/EditFlights" element={<EditFlights />} /> {/* Use 'element' prop */}
        <Route path="/useHistory" element={<useHistory />} /> {/* Use 'element' prop */}




      </Routes> {/* Replace 'Switch' with 'Routes' */}
    </Router>
  );
}

export default App;
  