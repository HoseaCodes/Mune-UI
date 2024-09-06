import { Dispatch, SetStateAction } from "react";

export const validatePhoneNumber = (phoneNumber: string, setError: Dispatch<SetStateAction<string>>) => {
    const phoneNumberPattern = /^[0-9]{7}$|^[0-9]{10}$/; // Allows only 7 or 10 digits
    if (!phoneNumberPattern.test(phoneNumber.replace(/\D/g, ''))) {
      setError('Phone number must be 7 or 10 digits.');
      return false;
    }
    setError(''); 
    return true;
  };