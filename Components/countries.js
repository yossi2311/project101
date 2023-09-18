import React from "react";


function Countries() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Explore Countries</h1>
      </header>
      <section id="search-section" style={styles.searchSection}>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="country">Country Name:</label>
          <input style={styles.input} type="text" id="country" name="country" placeholder="Enter a country name" />

          <label style={styles.label} htmlFor="capital">Capital:</label>
          <input style={styles.input} type="text" id="capital" name="capital" />

          <label style={styles.label} htmlFor="population">Population:</label>
          <input style={styles.input} type="text" id="population" name="population" />

          <label style={styles.label} htmlFor="language">Official Language:</label>
          <input style={styles.input} type="text" id="language" name="language" />

          <input style={styles.button} type="submit" value="Search Countries" />
        </form>
      </section>
      <section id="country-info-section" style={styles.compositionSection}>
        <h2>Country Information</h2>
        {/* Add content for displaying country information here */}
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

export default Countries;
