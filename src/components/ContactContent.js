import "./ContactContent.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

// const Result = () => {
//   return (
//     <div className="result">
//       <p>Message sent successfully!. I will contact you shortly</p>
//     </div>
//   );
// }

const ContactContent = () => {
  // const notify = () => 
  
  const [setResult] = useState(false)
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
      toast.success("Message Sent!", {autoClose: 2000});
      e.target.reset();
      setResult(true);
  };

  //hide result
  // setTimeout(() => {
  //   setResult(false)
  // }, 3000);
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
                <button className="btn">
                  Send <i class="bx bxs-paper-plane"></i>
                </button>
                <ToastContainer
                  toastStyle={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                  }}
                  icon={<i class="bx bxs-check-circle"></i>}
                  progressStyle={{backgroundColor: "white"}}
                />
              </div>
              {/* <div>{result ? <Result /> : null}</div> */}
            </form>
          </div>
          <div className="contact-box-2">
            <h3>Feel Free to reach out here too</h3>
            <div className="address">
              <div className="contact-us">
                <i className="fa fa-linkedin"></i>
                {/* eslint-disable-next-line */}
                <a
                  href="https://www.linkedin.com/in/egu-chinedu-282746193/"
                  target="_blank"
                >
                  Egu Chinedu
                </a>
              </div>
            </div>
            <div className="phone">
              <div className="contact-us">
                <i className="fa fa-whatsapp"></i>
                {/* eslint-disable-next-line */}
                <a href="https://wa.me/+2348140216606" target="_blank">
                  Send a whatsapp Message
                </a>
              </div>
            </div>
            <div className="instagram">
              <div className="contact-us">
                <i className="fa fa-instagram"></i>
                {/* eslint-disable-next-line */}
                <a href="https://ig.me/m/zeus_egu/" target="_blank">
                  Send me a DM on my Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
