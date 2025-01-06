"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
      console.log(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-6 ${className}`} id="form">
      <h1 className="text-2xl font-bold mb-4 text-black text-center hover:text-yellow-700  bg-yellow-500 bg-opacity-50 p-4 rounded-lg mx-4 md:mx-20">Contact Form</h1>
      <p className="mb-6 text-lg text-black text-center">
        Please fill out the contact form below. We’ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-bold text-md">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-gray-700 font-bold text-md">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 font-bold text-md">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-700 font-bold text-md">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex justify-center mt-5">
            <Button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;