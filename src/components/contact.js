import React, { useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [message, setMessage] = useState({});
  const [disableSubmit, setDisableSubmit] = useState(true);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...message }),
    })
      .then(() => alert("This is still a work in progress!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="container mx-auto sm:p-4">
      <h3 className="text-center text-3xl font-bold text-primary pb-4">
        Let me know why you are contacting me!
      </h3>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-secondary"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    className="p-2 focus:ring-indigo-500 hover:border-indigo-500focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-secondary"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-secondary"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email_address"
                    id="email_address"
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-medium text-secondary"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    onChange={handleChange}
                    autoComplete="phone"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-secondary"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    onChange={handleChange}
                    autoComplete="website"
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    onChange={handleChange}
                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  />
                </div>

                <div className="col-span-12 sm:col-span-12 lg:col-span-12">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-secondary"
                  >
                    Reason to contact
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 block w-full sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-center sm:px-6">
              <ReCAPTCHA
                sitekey="6LczX4IaAAAAABjifZ0DWO5W6P0kaT2yCm0jKPby"
                onChange={useCallback(() => setDisableSubmit(false))}
              />
              {/* <input
                type="checkbox"
                onChange={useCallback(() => setDisableSubmit(false))}
                onClick={console.log(disableSubmit)}
              /> */}
              <span className={disableSubmit ? "bg-opacity-50 opacity-50" : ""}>
                <button
                  type="submit"
                  id="submitBtn"
                  disabled={disableSubmit}
                  className={`${
                    disableSubmit ? "cursor-not-allowed" : "hover:bg-accent"
                  } inline-flex justify-center py-2 px-4 text-sm font-medium rounded-md text-secondary bg-secondary`}
                >
                  Submit
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
