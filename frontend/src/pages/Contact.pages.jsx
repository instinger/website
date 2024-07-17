import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending,setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submissionData = new FormData();
    
    for (const [key, value] of Object.entries(formData)) {
      submissionData.append(key, value);
    }
    
    submissionData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);
  
    try {
        setSending(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData 
      });
  
      const data = await res.json();
  
      if (data.success) {
        setSending(false);
        setIsSubmitted(true);
        e.target.reset();
      } else {
        console.log("Submission failed:", data);
        setIsSubmitted(false);
        setSending(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      setSending(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-slate-700">Get In Touch</h1>
          <p className="text-slate-600 mb-8 text-lg">
            Elevate your digital presence with us. Contact Instinger today to start your journey towards digital excellence. We're here to discuss your goals and help you thrive online. Let's connect and make a difference together.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Address</h3>
                <p className="text-slate-600">30-A-24, 18th Ln, Bangur Park, Rishra,<br />West Bengal 712248, India</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Phone</h3>
                <p className="text-slate-600">+91 8439239357</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Email</h3>
                <p className="text-slate-600">info@instinger.com<br />support@instinger.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-slate-700">Send A Proposal</h2>
            <p className="text-gray-600 mb-4">All fields are required <span className='text-red-700'>*</span></p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-slate-300 rounded-lg outline-none"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-slate-300 rounded-lg outline-none"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="description"
                  placeholder="Details about your project"
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg outline-none"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 uppercase">
              {sending ? 'Submitting...' : 'SUbmit'}
              </button>
            </form>
           
            {isSubmitted && (
              <p className="text-green-600 mt-4">Thank you for your message. It has been sent.</p>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;