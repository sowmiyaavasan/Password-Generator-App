import usePasswordGenerator from "./hooks/use-password-generator";
import "./styles.css";
import { useState } from "react";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include uppercase letters", state: false },
    { title: "Include lowercase letters", state: false },
    { title: "Include numbers", state: false },
    { title: "Include special charecters", state: false }
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title"> {password} </div>
          <Button
            customClass="btn copy-btn"
            onClick={handleCopy}
            text={copied ? "copied" : "copy"}
          />
        </div>
      )}
      <div className="char-length">
        <span>
          <label> charecter length </label>
          <label> {length} </label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkbox">
        {checkboxData.map((checkbox, index) => {
          return (
            <Checkbox
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
              index={index}
              title={checkbox.title}
            />
          );
        })}
      </div>
      {/* password strength */}
      <PasswordStrengthIndicator password={password} />
      {/* error handling */}
      {errorMessage && <div className="error-message"> {errorMessage} </div>}
      {/* generate password */}
      <Button
        customClass="btn generate-btn"
        onClick={() => generatePassword(checkboxData, length)}
        text="Generate Password"
      />
    </div>
  );
}
