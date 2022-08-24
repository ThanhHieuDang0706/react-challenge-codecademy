import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required

          pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
          placeholder="Contact Phone (###-####-####)"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};

export default ContactForm;