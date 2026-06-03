"use client";
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    
    // Allow only alphabets and spaces for names
    if (name === "firstName" || name === "lastName") {
      newValue = value.replace(/[^A-Za-z\s]/g, "");
    }
    // Allow only digits, max 10 characters for phone
    else if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }
    
    setFormData({ ...formData, [name]: newValue });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const tempErrors = {};
    
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      tempErrors.firstName = "Must be at least 2 characters";
    }
    
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      tempErrors.lastName = "Must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length !== 10) {
      tempErrors.phone = "Must be exactly 10 digits";
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = "Please select a subject";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    // Format message for WhatsApp
    const messageText = `*New Contact Form Submission*\n\n*First Name:* ${formData.firstName}\n*Last Name:* ${formData.lastName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    // WhatsApp API link with India country code
    const whatsappNumber = '918800844647';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    // Show success message
    setSubmitted(true);
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section className="bg-[#050505] text-white py-12 md:py-20 px-4 sm:px-6 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Send A Message</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter font-display uppercase">
            CONTACT <span className="text-brand-red">FORM</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
              <CheckCircle className="w-20 h-20 text-brand-red animate-bounce" />
              <h3 className="text-3xl font-black font-display uppercase tracking-tight">Message Sent!</h3>
              <p className="text-brand-light-gray font-sans font-light text-lg max-w-md">
                Thank you for reaching out. We'll get back to you on WhatsApp as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                    First Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className={`bg-[#0a0a0a] border ${errors.firstName ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors duration-300`}
                  />
                  {errors.firstName && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.firstName}</span></span>}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                    Last Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className={`bg-[#0a0a0a] border ${errors.lastName ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors duration-300`}
                  />
                  {errors.lastName && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.lastName}</span></span>}
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`bg-[#0a0a0a] border ${errors.email ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors duration-300`}
                  />
                  {errors.email && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.email}</span></span>}
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                    Phone Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`bg-[#0a0a0a] border ${errors.phone ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors duration-300`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.phone}</span></span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                  Subject <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setIsSelectOpen(true)}
                    onBlur={() => setIsSelectOpen(false)}
                    className={`w-full bg-[#0a0a0a] border ${errors.subject ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 pr-12 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors duration-300 appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="text-gray-600">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="membership">Membership & Pricing</option>
                    <option value="schedule">Class Schedule</option>
                    <option value="trial">Free Trial Class</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown 
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-red pointer-events-none transition-transform duration-300 ease-in-out ${isSelectOpen ? 'rotate-180' : 'rotate-0'}`} 
                  />
                </div>
                {errors.subject && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.subject}</span></span>}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase font-sans text-brand-light-gray">
                  Your Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Enter your message here..."
                  className={`bg-[#0a0a0a] border ${errors.message ? 'border-red-500' : 'border-brand-gray'} text-white px-5 py-4 text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none`}
                />
                {errors.message && <span className="text-red-500 text-xs flex items-center space-x-1"><AlertCircle className="w-3 h-3" /> <span>{errors.message}</span></span>}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full sm:w-auto flex items-center justify-center space-x-3 px-12 py-5 bg-brand-red text-white text-sm font-black tracking-widest uppercase hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,14,52,0.3)] font-sans cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
