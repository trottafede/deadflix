import React from "react";

const Contact = () => {
  return (
    <div className="container contactMe">
      <div className="row">
        <div className="col">
          <div className="mb-4">
            <p>Write me an email and I will read it asap.</p>
          </div>

          <form autocomplete="off" className="row needs-validation" novalidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                autocomplete="new-text1"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                autocomplete="new-text"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-4">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="fede@gmail.com"
                required
                autocomplete="off"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-12 mt-2">
              <label for="msg" className="form-label">
                Write your message
              </label>

              <textarea
                className="form-control"
                rows="5"
                id="msg"
                minlength="20"
                required
              ></textarea>

              <div className="invalid-feedback">
                Please provide a valid message.
              </div>
            </div>

            <div className="col-12 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree receive message
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>

            <div className="col-12 mt-2">
              <button className="btn btn-outline-light" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
