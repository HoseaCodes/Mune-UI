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
    fullName: string;
    message: string;
  }>({
    email: '',
    fullName: '',
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
    setFormData({ email: '', fullName: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto bg-[#1AAE33] px-4 py-8 rounded-[48px]"
    >
      <TextField
        type="email"
        name="email"
        val={formData.email}
        placeholder="Email"
        handleChange={() => handleChange}
      />
      <TextField
        type="name"
        name="name"
        val={formData.fullName}
        placeholder="Name"
        handleChange={() => handleChange}
      />
      <MessageTextArea
        val={formData.message}
        handleChange={() => handleChange}
      />
      <button
        type="submit"
        className="w-content flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
