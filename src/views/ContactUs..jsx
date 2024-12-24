import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent non-integer input
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return; 
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errors = { name: '', phone: '', email: '' };

    if (!formData.name) {
      errors.name = 'Please provide your Name';
      valid = false;
    } else if (formData.name.length > 255) {
      errors.name = 'Name must be under 255 characters!';
      valid = false;
    }

    if (!formData.phone) {
      errors.phone = 'Please provide your Phone Number';
      valid = false;
    } else if (!/^\d{11}$/.test(formData.phone)) {
      errors.phone = 'Invalid Phone Number!';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Please provide your E-mail Address';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid E-mail!';
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="contact-us text-start mt-4">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc</p>
  
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  inputMode="numeric"
                  required
                />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
