import React from 'react';

const TextField: React.FC<{
  type: string;
  name: string;
  val: string;
  placeholder: string;
  handleChange: () => void;
}> = ({ type, name, val, placeholder, handleChange }) => (
  <div>
    <input
      type={type}
      id={name}
      name={name}
      value={val}
      onChange={handleChange}
      required
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
