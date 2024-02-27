/* eslint-disable no-undef */
//! Video 48 FORMS_3, VIDEO 49 FORMS_4, VIDEO 50 FORMS_5

//! CONTROLLED COMPONENT


import { useState } from "react";
import COUNTRY from "./data.json";

let countries = COUNTRY;
const App = () => {
  let [state, setState] = useState({
    title: "",
    comment: "",
    gender: "",
    js_lib: "",
    country: "",
    price_range: 0,
    date: "",
    time: "",
    theme_color: "",
    loading: false,
  });
  // we cannot give skills above, create separate state bcz it is affecting all the other value

  let [skills, setSkills] = useState("");
  let {
    title,
    comment,
    loading,
    gender,
    js_lib,
    country,
    price_range,
    date,
    time,
    theme_color
  } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //function to handle country
  // let handleCountryChange = (e) => {
  //   // let { name, value } = e.target;
  //   setCountries([e.target.value]);
  // };

  // separate function to handle checkbox
  let handleCheckbox = (e) => {
    let { value } = e.target;
    // console.log(e.target.checked)
    if (e.target.checked) {
      setSkills((oldChecked) => {
        // console.log(oldCheck)
        return [...oldChecked, value];
      });
    } else {
      setSkills((oldChecked) => {
        return oldChecked.filter((val) => val !== value);
      });
    }
  };

  // After submitting, reset the value
  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log({ ...state, skills, country });
    } catch (error) {
      console.log(error);
    } 
    finally {
      setState({ loading: false, title: "", comment: "" });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        {/* Instead of value attribute to the targeted element, give value to the parent element */}
        {/* Handle radio button in contriolled component */}
        <div
          className="form-group"
          name="gender"
          value={gender}
          onChange={handleChange}
        >
          <label htmlFor="gender">Select gender</label>
          <input type="radio" name="gender" value="Male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
          <input type="radio" name="gender" value="Others" />
          Others
        </div>

        {/* To handle checkbox, we need to write separate function bcz only latest value is updated or stored in the state */}
        {/* CHECKBOX */}
        <div
          className="form-group"
          name="skills"
          value={skills}
          onChange={handleCheckbox}
        >
          <label htmlFor="skills">Select skills</label>
          <input type="checkbox" name="skills" id="skills" value="Javascript" />
          Javascript
          <input type="checkbox" name="skills" id="skills" value="Java" />
          Java
          <input type="checkbox" name="skills" id="skills" value="NodeJs" />
          NodeJs
          <input type="checkbox" name="skills" id="skills" value="ReactJs" />
          ReactJs
        </div>

        {/* Dropdown  */}
        <div className="form-group">
          <label htmlFor="Choose javascript libraries">
            Choose javascript libraries
          </label>
          <select name="js_lib" value={js_lib} onChange={handleChange}>
            <option value="react" key="">
              React
            </option>
            <option value="MomentJs" key="">
              MomentJs
            </option>
            <option value="Jquery" key="">
              JQuery
            </option>
          </select>
        </div>

        {/* COUNTRY BLOCK FOR DROPDOWN */}
        <div className="form-group">
          <label htmlFor="countries">Select countries</label>
          <select
            name="country"
            id="countries"
            value={country}
            onChange={handleChange}
          >
            {countries.map((country) => {
              return (
                <>
                  <option value={country.code}>
                    <span>
                      <picture>
                        <img src={country.flag} alt={country.code} />
                      </picture>
                    </span>
                    <span>{country.country}</span>
                  </option>
                </>
              );
            })}
          </select>
        </div>

        {/* PRICE RANGE */}
        <div className="form-group">
          <label htmlFor="price_range">Price range</label>
          <span>{price_range.length > 0 && price_range}</span>
          <input
            type="range"
            name="price_range"
            id="price_range"
            min={0}
            max={100}
            value={price_range}
            onChange={handleChange}
          />
        </div>

        {/* DATE OBJECT */}
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleChange}
          />
        </div>

        {/* TIME OBJECT */}
        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={handleChange}
          />
        </div>


        {/* COLOR */}
        <div className="form-group">
          <label htmlFor="color">Select theme color</label>
          <input
            type="color"
            name="theme_color"
            id="color"
            value={theme_color}
            onChange={handleChange}
          />
        </div>

        {/* TEXTAREA */}
        <div className="form-group">
          <label htmlFor="comment">Write your comments</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            value={comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button>{loading ? "loading" : "submit"}</button>
          {/* <button disabled={!state.title && !state.comment ? true : false}>
            {loading ? "loading" : "submit"}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default App;



//! Video 47 FORM_2
//! controlled component
//! declare state

//! Functional based component with state object
// Explicitly merge the values in one object using Object.assign or ... (spread operator) i.e. ...state

// import { useState } from "react";

// const App = () => {
//   let [state, setState] = useState({
//     email: "",
//     password: "",
//     loading: false,
//   });

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };
//   let { email, password, loading } = state;

//   // let x = { name: "imran" };
//   // let y = { company: "FFE" };
//   // let mergeValue = Object.assign(x, y);
//   // console.log(mergeValue);

//   // let mergeValueWithSPread = { ...x, ...y };
//   // console.log(mergeValueWithSPread);

//   //! in FBC, we have to explicitly merge using spread or Object.assign
//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value }); // Merging values into one object
//   };
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="">email</label>
//           <input
//             type="email"
//             value={email}
//             name="email"
//             id="email"
//             placeholder="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="">password</label>
//           <input
//             type="password"
//             value={password}
//             name="password"
//             id="password"
//             placeholder="password"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <button>{loading ? "loading" : "submit"}</button>
//         </div>
//       </form>
//       <h1>{email.split('').reverse().join('')}</h1>
//       {console.log(typeof email)}
//       <h1>{password}</h1>
//     </div>
//   );
// };

// export default App;

//! uncontrolled component
//! add ref to the element
//! how to use a function for onChange to use it multiple times
// import { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       loading: false,
//     };
//   }

//   handleChange = (e) => {
//     // console.log(e);
//     // console.log(e.target.name)
//     // console.log(e.target.value)

//     // let x = {
//     //   email: e.target.value,
//     //   password: e.target.value,
//     // }
//     // console.log(x)

//     let {name, value} = e.target;
//     this.setState({[name]: value});

//     //by giving array utilizes variable that is declared, as a object key else key will be treated as custom key and the variable won't get utilized, also the data can't be entered to the form
//     // this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     // this.setState({loading: true})
//   };

//   render() {
//     //! by giving array utilizes variable as a object key
//     // let company= "";
//     // let name = "";

//     // let details = {
//     //   [company]: `Company Name (optional)`,
//     //   [name]: `Name`,
//     // }
//     // console.log(details)

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">email</label>
//             <input
//               type="email"
//               placeholder="enter email"
//               id="email"
//               name="email" //name is mandatory, without name the handleClick() won't work
//               value={this.state.email}
//               ref={this.emailRef}
//               onChange={this.handleChange}
//               //  onChange={e=> this.setState({email: e.target.value})}
//             />
//           </div>
//           <div htmlFor="password">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder="enter password"
//               id="password"
//               name="password"
//               value={this.state.password}
//               ref={this.passwordRef}
//               onChange={this.handleChange}
//               //  onChange={e=>this.setState({password: e.target.value})}
//             />
//           </div>
//           <button onClick={this.handleSubmit}>Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// import { Component, createRef } from 'react'

// export default class App extends Component {
//   emailRef = createRef();
//   passwordRef = createRef();

//   handleSubmit = e => {
//     e.preventDefault();
//     let email = this.emailRef.current.value;
//     let password = this.passwordRef.current.value;
//     console.log({email, password})
//   }

//   render() {
//     return (
//     <>
//       <div>
//        <h2>Login</h2>
//        <form className='form-group'>
//         <div>
//           <label htmlFor='email'>email</label>
//          <input
//            type="email"
//            placeholder="enter email"
//            id='email'
//            ref={this.emailRef}
//          />
//          </div>
//          <div htmlFor="password">
//          <label htmlFor='password'>Password</label>
//          <input
//            type="password"
//            placeholder="enter password"
//            id='password'
//            ref={this.passwordRef}
//          />
//          </div>
//          <button onClick={this.handleSubmit}>Login</button>
//        </form>
//      </div>
//      </>
//     )
//   }
// }

//! video 46 FORMS_1
//! UNCONTROLLED COMPONENT -> RECOMMENDED BY REACT
// initialize state object
// Add value attribute to the form elements
// State mutation or state update -> add onChange event to the element

/* eslint-disable react/jsx-no-undef */
// import { useState } from "react";

// const App = () => {
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="enter email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="enter password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button>Login</button>
//       </form>
//     </div>
//   );
// };

// export default App;



// -----------------------------------------------------------------------------------------------------------------------------
// //! Uncontrolled component
// //! react ref

// import { useRef } from "react"

// //! for the elements have to add ref attribute
// const App = () => {
//   let emailRef = useRef()
//   let passwrodRef = useRef();

//   let handleSubmit = e => {
//     e.preventDefault();
//     let email = emailRef.current.value;
//     let password = passwrodRef.current.value;
//     console.log({email, password})

//   }

//   return (
//     <section id='form'>
//       <article>
//         <h2>Login</h2>
//         <form>
//         <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" placeholder="email" id="email" ref={emailRef}/>
//           </div>
//         <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" placeholder="password" id="password" ref={passwrodRef}/>
//           </div>
//           <div className="form-group">
//             <button onClick={handleSubmit}>Login</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   )
// }

// export default App
