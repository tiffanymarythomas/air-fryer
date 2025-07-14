import React, { useState } from "react";
import "./ContactForm.css";

export default function SpidrForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    airFryerCost: "",
    spidrPin: "",
  });

  const [showPin, setShowPin] = useState(false); 

  const formatPin = (digits) => {
    const cleaned = digits.replace(/\D/g, "").slice(0, 16);
    return cleaned.match(/.{1,4}/g)?.join("-") || "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "spidrPin") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 16);
      setForm((f) => ({ ...f, spidrPin: digitsOnly }));
    } else if (name === "airFryerCost") {
      if (/^\d*$/.test(value)) {
        setForm((f) => ({ ...f, [name]: value }));
      }
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form.firstName ,form.lastName, form.phone, form.email,form.airFryerCost);
    alert("Form data logged to console!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} >
        <h2 className="Heading">Guess the price</h2>

        <label htmlFor="firstName">First name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
        />

        <label htmlFor="lastName">Last name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
        />

        <label htmlFor="phone">Phone number</label>
        <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
        />

        <label htmlFor="email">Email address</label>
        <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
        />

        <label htmlFor="airFryerCost">Guess the air fryer’s cost</label>
        <input
            id="airFryerCost"
            name="airFryerCost"
            type="text"
            value={form.airFryerCost}
            onChange={handleChange}
            inputMode="numeric"
        />

        <label htmlFor="spidrPin">Spidr PIN</label>
        <div className="pin-input-container">
        <input
            id="spidrPin"
            name="spidrPin"
            type={showPin ? "text" : "password"}
            inputMode="numeric"
            placeholder="####-####-####-####"
            maxLength={19}
            value={formatPin(form.spidrPin)}
            onChange={handleChange}
            autoComplete="off"
            spellCheck="false"
        />

        <button
            type="button"
            onClick={() => setShowPin((s) => !s)}
            aria-label={showPin ? "Hide PIN" : "Show PIN"}
            className="pin-toggle-btn"
        >
            {showPin ? "🚫 " : "👁️"}
        </button>
        </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}
