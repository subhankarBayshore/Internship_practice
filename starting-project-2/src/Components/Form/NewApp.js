import React, { useState } from "react";

const EmailSuggestionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const generateEmailSuggestion = () => {
    if (
      firstName &&
      lastName &&
      firstName.length >= 1 &&
      lastName.length >= 3
    ) {
      const suggestedEmail = `${firstName[0].toLowerCase()}${lastName[2].toLowerCase()}@example.com`;
      setEmail(suggestedEmail);
    } else {
      setEmail("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={generateEmailSuggestion}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={generateEmailSuggestion}
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
      </div>
    </div>
  );
};

export default EmailSuggestionForm;
