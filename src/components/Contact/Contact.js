import React, { useRef } from "react";
import "../Contact/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR SERVICE ID",
        "YOUR TEMPLATE ID",
        form.current,
        "YOUR USER ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section data-aos="fade" data-aos-duration="800" id="contact">
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-h1">
            <h1>Contact us</h1>
          </div>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="text" name-="email" placeholder="Your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Enter a message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
