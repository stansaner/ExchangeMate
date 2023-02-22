import { useState } from "react";
import "./contact.css";

const styles = {
  header: {
    textAlign: "center",
    margin: "20px 0",
  },

  success: {
    textAlign: "center",
    color: "lightseagreen",
    marginTop: "15px",
  },
};

function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "8442d1a9-4635-4e30-84db-809f51db94e2",
  });

  const handleChange = (event) => {
    //console.log(event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);

    // const formData = new FormData(form);
    // const object = Object.fromEntries(formData);
    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="wave"></div>
      <h1 id="contact" style={styles.header}>
        Contact Us
      </h1>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Email Address"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message..."
            cols="30"
            rows="10"
          ></textarea>
          <div className="contact-button-container">
            <input type="submit" submit="true" />
          </div>
        </form>
      </div>
      {success && <p style={styles.success}>Form Submitted Successfully!</p>}
    </>
  );
}

export default Contact;
