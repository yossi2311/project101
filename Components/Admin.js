// import React from 'react'
// import { useState,useEffect } from 'react';



// export default function Admin() {
//     const [AdminDB,setAdminDB]=useState([]);

//     const getAdmin=()=>{

//         fetch("http://localhost:4000:api/adminstrators/getallAdmin")
//         .then((response)=> response.json ())
//         .then((data)=>{
//             setAdminDB(data)
//             console.log(data);
//         })
//     }

//     useEffect(()=>{
//         getAdmin();
//     },[]);

// return(
// <div>
//     <table className='adminstable'>

//         <thead>
//             <tr>
//                 <th>Admin Id</th>
//                 <th>First-name</th>
//                 <th>Last-name</th>
//                 <th>User name</th>
//                 <th>Password</th>
//             </tr>
//         </thead>
//         <tbody>
//             {AdminDB.map((adminstrators)=>{
//                 <tr key={adminstrators.id}className='admin-item'>
//                     <td>{adminstrators.id}</td>
//                     <td>{adminstrators.Firename}</td>
//                     <td>{adminstrators.Lastname}</td>
//                     <td>{adminstrators.Username}</td>
//                     <td>{adminstrators.password}</td>
//                 </tr>



//             })}



//         </tbody>
//     </table>
// </div>


// )

// }

// import React from "react";

// function Admin() {
//   return (
//     <div style={styles.container}>
      
//       <table style={styles.adminstable}>
//         <thead>
//           <tr>
//             <th>Admin Id</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>User Name</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//         {Admin.map((adminstrators)=>{
//                 <tr key={adminstrators.id}className='admin-item'>
//                     <td>{adminstrators.id}</td>
//                     <td>{adminstrators.Firename}</td>
//                     <td>{adminstrators.Lastname}</td>
//                     <td>{adminstrators.Username}</td>
//                     <td>{adminstrators.password}</td>
//                 </tr>



//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     backgroundColor: "#f0f0f0",
//     padding: "20px",
//     borderRadius: "5px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     margin: "20px auto",
//     maxWidth: "800px",
//   },
//   adminstable: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   adminItem: {
//     border: "1px solid #ccc",
//     padding: "8px",
//     textAlign: "center",
//   },
// };

// export default Admin;
// import React, { useState, useEffect } from 'react';

// function AdminTable() {
//   const [adminData, setAdminData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the server using the Fetch API
//     fetch('/api/adminstrators') // Replace with the actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         setAdminData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Admins Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {adminData.map((admin) => (
//             <tr key={admin.id}>
//               <td>{admin.id}</td>
//               <td>{admin.name}</td>
//               <td>{admin.email}</td>
//               {/* Add more table cells for additional data */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminTable;


import React, { useState, useEffect } from 'react';


function AdminTable() {
  const [adminData, setAdminData] = useState([]);

  const getAdmin = () => {
    // Fetch data from the server
    fetch('http://localhost:4000/api/adminstrators/getallAdmin')
      .then((response) => response.json())
      .then((data) => {
        setAdminData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
useEffect(()=>{
  getAdmin()
},[])
  // The empty array [] means this effect runs once when the component mounts

  return (
    <div>
      <h1>Admins Table</h1>
      <table className='admins-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {adminData.map((adminstrators) => (
            <tr key={adminstrators.id}>
              <td>{adminstrators.id}</td>
              <td>{adminstrators.User}</td>
              <td>{adminstrators.First_name}</td>
              <td>{adminstrators.Last_name}</td>
              <td>{adminstrators.password}</td>
              {/* Add more table cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
}

export default AdminTable;
