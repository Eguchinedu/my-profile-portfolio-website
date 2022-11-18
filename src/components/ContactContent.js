import "./ContactContent.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactContent = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzh745r",
        "template_6rigvct",
        form.current,
        "scXz_iY6pe47Vxs66"
      )
      e.target.reset();
  };
  return (
    <div className="contact">
      <div className="container-2">
        <div className="contact-box">
          <div className="contact-box-1">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-row">
                <div className="input-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" required />
                </div>
                {/* <div className="input-group">
                  <label for="tel">Phone No</label>
                  <input type="tel" name="tel" id="tel" required />
                </div> */}
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                {/* <div className="input-group">
                  <label for="address">Address</label>
                  <input type="text" name="address" id="address" required />
                </div> */}
              </div>
              <div className="text-group">
                <label for="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="button">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-box-2">
            <h3>Contact us here too</h3>
            <div className="address">
              <div className="contact-us">
                <ion-icon name="map"></ion-icon>
                <p>No 7, Ajayi Crowther road, Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="phone">
              <div className="contact-us">
                <ion-icon name="call"></ion-icon>
                <p>+234 814 021 6606</p>
              </div>
            </div>
            <div className="instagram">
              <div className="contact-us">
                <ion-icon name="logo-instagram"></ion-icon>
                <p>Send us a DM on our Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
