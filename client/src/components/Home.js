import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import DogProfiles from "./DogProfiles";

function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;

//// alternative version below

// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import DogProfiles from "./DogProfiles";

// function Home({ user, setUser }) {
//   const HomePage = () => {
//     if (user) {
//       return <h1>Welcome, {user.username}!</h1>;
//     } else {
//       return <h1>Please Login or Sign Up</h1>;
//     }
//   };

//   return (
//     <>
//       {/* <NavBar user={user} setUser={setUser} /> */}
//       <main>
//         <Routes>
//           {user ? (
//             <Route path="/dogs" element={<DogProfiles />} />
//           ) : (
//             <Route path="/" element={<HomePage />} />
//           )}
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default Home;
