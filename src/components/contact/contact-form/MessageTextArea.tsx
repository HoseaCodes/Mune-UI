import React from 'react';

const MessageTextArea: React.FC<{
  val: string;
  handleChange: () => void;
}> = ({ val, handleChange }) => (
  <div>
    <textarea
      id="message"
      name="message"
      value={val}
      onChange={handleChange}
      required
      rows={6}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 rounded-xl focus:border-indigo-500 sm:text-sm"
      placeholder="Message"
    />
  </div>
);

export default MessageTextArea;
