import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="basic-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
