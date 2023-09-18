import React from "react";


function Customers() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Customer Information</h1>
      </header>
      <section id="search-section" style={styles.searchSection}>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="name">Customer Name:</label>
          <input style={styles.input} type="text" id="name" name="name" placeholder="Enter customer's name" />

          <label style={styles.label} htmlFor="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" placeholder="Enter customer's email" />

          <label style={styles.label} htmlFor="phone">Phone Number:</label>
          <input style={styles.input} type="text" id="phone" name="phone" placeholder="Enter customer's phone number" />

          <label style={styles.label} htmlFor="address">Address:</label>
          <textarea style={styles.input} id="address" name="address" placeholder="Enter customer's address"></textarea>

          <input style={styles.button} type="submit" value="Search Customers" />
        </form>
      </section>
      <section id="customer-info-section" style={styles.compositionSection}>
        <h2>Customer Information</h2>
        {/* Add content for displaying customer information here */}
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "400px",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  searchSection: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "3px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px",
  },
  compositionSection: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "400px",
    textAlign: "center",
  },
};

export default Customers;
