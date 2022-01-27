import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ih7y4s",
        "template_o4ggwp4",
        "#myForm",
        "user_ZPq6dVO8o1TrvCDXIHJ9Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="container">
        <form id="myForm" onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <h3
        className="col-8 pt-3 mx-auto"
        style={{
          color: "white",
          textShadow: "0.1em 0.1em 0.1em black",
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        If u cant send the form or have any problems, contact me directly by my
        gmail :
      </h3>
      <h3
        className="col-8 pt-3 mx-auto"
        style={{
          color: "white",
          textShadow: "0.1em 0.1em 0.1em black",
          textAlign: "center",
        }}
      >
        <b>winkiripinki@gmail.com</b>
      </h3>
    </div>
  );
}
