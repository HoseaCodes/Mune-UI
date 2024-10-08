import React, { ChangeEvent } from 'react';

const TextField: React.FC<{
  type: string;
  name: string;
  val: string;
  placeholder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({ type, name, val, placeholder, handleChange }) => (
  <div>
    <input
      type={type}
      id={name}
      name={name}
      value={val}
      onChange={handleChange}
      required
      className="block w-full px-6 py-3 bg-white border border-gray-300 rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400 text-black sm:text-sm placeholder-[#010A0399] font-semibold font-sf-pro"
      placeholder={placeholder}
    />
  </div>
);

export default TextField;
