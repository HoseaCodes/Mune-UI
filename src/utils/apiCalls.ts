import { Dispatch, SetStateAction } from "react";

export const saveUserInfo = async (e: { preventDefault: () => void; }, setError: Dispatch<SetStateAction<string>>) => {
    e.preventDefault();
    const phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement);
  
    try {
      const response = await fetch('/api/save-number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: phoneNumber.value.replace(/\D/g, '') }),
      });
  
    const data = await response.json();
    if (response.ok) {
        console.log(data.message); 
        phoneNumber.value = '';

        alert(data.message);
    } else {
        setError(data.error);
    }
    } catch (error) {
        setError('Failed to save phone number: ' + (error as Error).message);
    }
  };
  