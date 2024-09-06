
export const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const cleanedValue = value.replace(/\D/g, '');

    // Format for 7 digits: XXX-XXXX
    if (cleanedValue.length === 7) {
      return `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 7)}`;
    }

    // Format for 10 digits: (XXX)-XXX-XXXX
    if (cleanedValue.length === 10) {
      return `(${cleanedValue.slice(0, 3)})-${cleanedValue.slice(3, 6)}-${cleanedValue.slice(6, 10)}`;
    }

    return cleanedValue; 
  };