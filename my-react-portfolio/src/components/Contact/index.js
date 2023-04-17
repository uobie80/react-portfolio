import React, { useState } from "react";
import { validateEmail } from '../../utils/Helpers';



export default function Contact () {


   // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputId = target.id;
  const inputValue = target.value;

  // Based on the input id, we set the state of either email, name, and message
  if (inputId === 'formGroupExampleInput') {
    setName(inputValue);
  } else if (inputId === 'formGroupExampleInput2') {
    setEmail(inputValue);
  }
};



  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
   

    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setErrorMessage('');
  };


    return (

      <main className="container" role="main">
      <div className="container-fluid jumbotron jumbotron-portfolio py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white">Contact Me</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
          <form>
          <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" style={{width: '600px'}} onChange={handleInputChange} value={name} placeholder="John Doe"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
          <input type="email" className="form-control" id="formGroupExampleInput2" style={{width: '600px'}} onChange={handleInputChange} value={email} placeholder="username@domainname.com"/>
        </div>
        
           <div className="mb-3">
           <label htmlFor="messageTextarea1" className="form-label">Message</label>
            <textarea class="form-control" id="messageTextarea1" rows="5" style={{width: '600px'}}></textarea>
         </div>
         <button type="button" className="btn btn-primary" onClick={handleFormSubmit}> Submit </button>
         </form>
           {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
        </div>
        </div>
   </main>
    );
}