
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.organization)
      tempErrors.organization = "Organization Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.contactNumber) {
      tempErrors.contactNumber = "Contact Number is required";
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      tempErrors.contactNumber = "Contact Number is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    if (e.target.name === "contactNumber") {
      if (!/^\d*$/.test(e.target.value)) {
        return;
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      console.log("Form submitted successfully", formData);
      setSuccessMessage("Form submitted successfully");
      setFormData({
        name: "",
        organization: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full grid sm:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold mb-6">Got any questions?</h2>
          <p className="mb-6">Let's discuss it over a cup of coffee.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 col-span-2 font-['Montserrat']"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <input
                className={`w-full p-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div>
              <input
                className={`w-full p-2 border rounded ${
                  errors.organization ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                name="organization"
                placeholder="Organization Name"
                value={formData.organization}
                onChange={handleChange}
              />
              {errors.organization && (
                <span className="text-red-500 text-sm">
                  {errors.organization}
                </span>
              )}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <input
                className={`w-full p-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div>
              <input
                className={`w-full p-2 border rounded ${
                  errors.contactNumber ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <span className="text-red-500 text-sm h-10">
                {errors.contactNumber && <>{errors.contactNumber}</>}
              </span>
            </div>
          </div>
          <div>
            <textarea
              className={`w-full p-2 border rounded ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-full self-start">
            Submit
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 text-green-500">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

