import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !form.email.includes('@')) newErrors.email = 'Valid email required';
    if (!form.company) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert('Form submitted! (no backend connected)');
    }
  };

  return (
    <section id="contact" className="py-16 bg-indigo-50 text-center">
      <h3 className="text-3xl font-semibold text-indigo-700 mb-8">Get in Touch</h3>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto text-left"
      >
        <div className="mb-4">
          <label className="block font-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">License Type</label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select License Type --</option>
            <option value="Windows">Windows</option>
            <option value="Office 365">Office 365</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Other">Other</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
