import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";
    const selectedCheckboxOptions = checkboxData.filter(
      (checkbox) => checkbox.state
    );

    if (selectedCheckboxOptions.length === 0) {
      setErrorMessage("Select atleast one checkbox");
      setPassword("");
      return;
    }

    selectedCheckboxOptions.forEach((option) => {
      switch (option.title) {
        case "Include uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include special charecters":
          charset += "!@#$%^&*()";
          break;
        case "Include numbers":
          charset += "1234567890";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
