import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Craig Haywood",
    text: "I have been a member since Senja launched and absolutely love the service. Senja integrates seamlessly into my sites and if there is anything else I may want to do, you can even add custom CSS to any of their widgets. Support staff are friendly and efficient.",
    date: "Sep 29, 2023",
    rating: 4.5,
    position: "CEO, Example Inc.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Amar Gopal",
    text: "Super tool to create and import testimonials! I usually use the embed in my Notion templates and landing pages, and it's super easy to use. Generating testimonial images and wall of love and embedding in websites is easy as well, and I use Senja's generation to embed in the website I built in Framer.",
    date: "Aug 8, 2023",
    rating: 5,
    position: "Co-Founder, TaskTechRecruiters",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Deepa Goel",
    text: "Within ten minutes of signing up, I already upgraded twice because I immediately wanted to give up testimonial solutions.",
    date: "Feb 11, 2024",
    rating: 4,
    position: "Co-Founder, SkyDesireGlobal",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Navin Soni",
    text: "Within ten minutes of signing up, I already upgraded twice because I immediately wanted to give up testimonial solutions.",
    date: "Feb 11, 2024",
    rating: 4,
    position: "Founder, AuditHub",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Ragini",
    text: "Within ten minutes of signing up, I already upgraded twice because I immediately wanted to give up testimonial solutions.",
    date: "May 24, 2024",
    rating: 4.4,
    position: "Founder, Aadiyogshakti",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-10">
      <div className="flex space-x-6 animate-marquee hover:animation-pause">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md transform ${
              index % 2 === 0 ? 'translate-y-10' : '-translate-y-10'
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-800 text-lg mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.372 1.24.588 1.81l-3.375 2.454a1 1 0 00-.363 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118l-3.375-2.454a1 1 0 00-1.175 0l-3.375 2.454c-.784.57-1.838-.197-1.54-1.118l1.286-3.956a1 1 0 00-.363-1.118L2.05 8.383c-.784-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
