import React from 'react';
import ScrollToTopLink from './ScrollTop.components';

const socialIcons = [
    { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 1h9a6.5 6.5 0 016.5 6.5v9a6.5 6.5 0 01-6.5 6.5h-9A6.5 6.5 0 011 16.5v-9A6.5 6.5 0 017.5 1z' },
    { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z' },
];


const footerLinks = [
    {
        title: 'Company',
        links: [
          { name: 'About Us', href: "/about" },
          { name: 'Portfolio', href: '/portfolio' },
          { name: 'Blogs', href: '/blog' },
          { name: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Services',
        links: [
          { name: 'Web Development', href: '/service' },
          { name: 'Mobile Apps', href: '/service' },
          { name: 'UI/UX Design', href: '/service' },
          { name: 'Digital Marketing', href: "/service" },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '/privacy-policy' },
          { name: 'Terms of Service', href: '/terms-of-service' },
          { name: 'Cookie Policy', href: '/cookie-policy' },
          { name: 'GDPR', href: '/gdpr' },
        ],
    },
]

const Footer = () => {

  return (
    <footer className="bg-black mt-96 text-white relative">
      {/* Project Inquiry Section */}
      <div className="relative w-[85%] -top-32 mx-auto bg-blue-600 text-center px-6 py-20 rounded-2xl shadow-lg -mt-40 mb-25">
        <h2 className="text-4xl font-bold mb-2">Ready to discuss your project?</h2>
        <p className="mb-4">Our team is here to help bring your ideas to life.</p>
        <ScrollToTopLink to={"/contact"}><button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition duration-300">
          Get in Touch
        </button></ScrollToTopLink>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-8 justify-evenly items-center">
          <div className="mb-8">
            <h3 className='w-auto h-10 mb-4 text-4xl'><span className='text-slate-500 font-bold'>Ins</span><span className='font-bold text-slate-300'>tinger</span></h3>
            <p className="text-gray-400 mb-4">
              Creativity Meets Technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon) => (
                <a key={icon.name} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">{icon.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <ScrollToTopLink to={link.href}>
                      <p className="text-slate-400 hover:text-white transition-colors duration-300">
                        {link.name}
                      </p>
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 font-semibold">
            © 2024 Instinger. All rights reserved.
          </p>
          <div className="flex space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;