import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import TextField from './TextField';
import MessageTextArea from './MessageTextArea';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    message: string;
  }>({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add submission logic here...
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#1AAE33] px-4 py-8 rounded-[48px] w-full"
    >
      <TextField
        type="name"
        name="name"
        val={formData.name}
        placeholder="Name"
        handleChange={handleChange}
      />
      <TextField
        type="email"
        name="email"
        val={formData.email}
        placeholder="Email"
        handleChange={handleChange}
      />
      <MessageTextArea
        val={formData.message}
        handleChange={handleChange}
      />
      <button
        type="submit"
        className="w-content flex justify-center py-3 px-6 border-2 border-[#CEE0D0] rounded-xl shadow-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 text-black font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
