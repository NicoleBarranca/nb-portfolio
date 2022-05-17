import React from "react";

function Contact() {
  return (
    <section>
      <h1>Contact me</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
