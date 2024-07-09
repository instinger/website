import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button 
                className="flex justify-between items-center w-full text-left" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-slate-800">{question}</span>
                <svg 
                    className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        { 
            question: "What is Instinger?", answer: "Your digital success partner. With seasoned professionals and unwavering dedication, we bring experience and creativity to help businesses thrive online."
        },
        {
             question: "What services does Instinger offer?", answer: "We offer Web and app development, SEO management, UI/UX, Data analysis and Digital marketing services to help you thrive in your business." 
        },
        {
             question: "How can I get started with Instinger?", answer: "You can get started by contacting us through our website to learn more about our services and discuss the project." 
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-700 text-center mb-8">Frequently Asked Questions</h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
