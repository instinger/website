import React from 'react';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogCard = ({ title, description, date, imageUrl }) => {


  return (
    <div className="relative w-full max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm mb-2 line-clamp-1">{description}</p>
        <p className="text-white text-xs">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
