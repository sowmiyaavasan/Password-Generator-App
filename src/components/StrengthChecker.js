import React from "react";

const passwordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const length = password.length;
    if (length < 1) {
      return "";
    } else if (length < 4) {
      return "very week";
    } else if (length < 8) {
      return "Poor";
    } else if (length < 12) {
      return "Medium";
    } else if (length < 16) {
      return "Strong";
    } else {
      return "Very strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Password strength:
      <span>{passwordStrength}</span>{" "}
    </div>
  );
};

export default passwordStrengthIndicator;
