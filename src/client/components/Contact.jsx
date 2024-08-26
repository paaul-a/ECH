import React from 'react';


function Contact() {
  return (
    <>
      <div className="contact-container">

        <header>
          <h1>Contact ECH Immigration</h1>
        </header>

        <section className="contact-form">
          <h2>Mailing Address</h2>
          <p>2840 West Bay Dr. Box 132 Belleair Bluffs, FL 33770</p>

          <h2>Contact Information</h2>
          <p>Email: office@echimmigration.com</p>
          <p>Tel: 727-238-8479</p>

          <h2>Contact Form</h2>
          <form action="#" method="post" className="container">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
