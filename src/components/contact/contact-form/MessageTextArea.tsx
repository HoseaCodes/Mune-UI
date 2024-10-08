import React, { ChangeEvent } from 'react';

const MessageTextArea: React.FC<{
  val: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({ val, handleChange }) => (
  <div>
    <textarea
      id="message"
      name="message"
      value={val}
      onChange={handleChange}
      required
      rows={6}
      className="block w-full px-6 py-3 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-slate-400 rounded-3xl laptop:rounded-xl focus:border-slate-400 text-black sm:text-sm placeholder-[#010A0399] font-semibold"
      placeholder="Message"
    />
  </div>
);

export default MessageTextArea;
