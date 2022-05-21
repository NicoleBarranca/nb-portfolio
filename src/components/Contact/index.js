import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            placeholder="Who are you?"
            id="inputName4"
          />
        </div>

        <div class="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="How can I reach you?"
            id="inputEmail4"
          />
        </div>

        <div class="col-md-12">
          <label htmlFor="inputMessage4" className="form-label">
            Message:
          </label>
          <textarea
            type="message"
            className="form-control"
            placeholder="Send me a messge..."
            id="inputmessage4"
            rows="5"
          />
        </div>

        <button data-testid="button" className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
