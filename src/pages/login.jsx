// //import React from 'react'

// // function login() {
// //   const Array1=[1,2,4]
// //   const Array2=[3,5,6]
// //   const totalArray=[...Array1,...Array2]
// //   document.write(totalArray)
// //   console.log(totalArray)

// //   return (
// //     <div>login</div>
// //   )
// // }
// //import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { useState } from "react";
// import './App.css';

// // function MissedGoal() {
// //   return <h1>MISSED!</h1>;
// // }

// // function MadeGoal() {
// //   return <h1>GOAL!</h1>;
// // }

// // function login() {
// //   const isGoal = false;
// //   if (isGoal) {
// //     return <MadeGoal />;
// //   }
// //   return <MissedGoal />;
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<login />);


// ///--form--//

// function Login() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('===>>',inputs);
//     //document.write(localStorage.getItem('Username'));
//     //localStorage.setItem("Username",JSON.stringify(inputs.username))
//   }
//      //setItem and getItem store data localstorage data//

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   localStorage.setItem("Username", JSON.stringify(inputs.username));
//   //   const storedUsername = localStorage.getItem("Username" );
//   //   if (storedUsername) {
//   //     const parsedUsername = JSON.parse(storedUsername);
//   //     console.log("Retrieved Username:", parsedUsername);
//   //   } else {
//   //     console.log("Username not found in localStorage.");
//   //   }
//   // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);


// export default Login

//how to setItem and getItem  and remove-Item in Localstorege data and apply function using react.js==

//import React, { useState } from 'react';
//import { useNavigate} from "react-router-dom";
//import './App.css';

const Login = () => {
  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [pwd, setPwd] = useState('');

  // const handle = () => {
  //   console.log(name,pwd)
  //   //localStorage.setItem('Name', name);
  //   //localStorage.setItem('Password', pwd);
  //   navigate("/home");
  // };
  // const remove = () => {
  //   //localStorage.removeItem('Name');
  //   //localStorage.removeItem('Password');
  // };
  // return (
  //   <div className="App">
  //     <div>
  //       <p>Name of the user:</p>
  //       <input className='inputform'
  //         placeholder="Name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <p>Password of the user:</p>
  //       <input className='inputform'
  //         type="password"
  //         placeholder="Password"
  //         value={pwd}
  //         onChange={(e) => setPwd(e.target.value)}
  //       />
  //       <div >
  //         <button className='btn'  onClick={handle}>Done</button>
  //       </div>
  //       <div >
  //         <button className='btn' onClick={remove}>Remove</button>
  //       </div>
  //     </div>

  //   </div>
  // );
};
export default Login;