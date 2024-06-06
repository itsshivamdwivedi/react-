import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // State variables to store password length, whether numbers or special characters are allowed, and the generated password
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState('');

  // useRef hook to reference the password input field for copying to clipboard
  const password_ref = useRef(null);

  // Function to generate a random password based on the current settings
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // Append numbers to the characters set if allowed
    if (numberAllowed) str += '0123456789';
    // Append special characters to the characters set if allowed
    if (charAllowed) str += ' !@#$%^&*()-_=+\\|[]{};:/?.';
    // Generate the password of the specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    // Update the password state
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToclipBoard = useCallback(() => {
    // Select the password text in the input field (optional but useful for UX)
    password_ref.current?.select();
    // Set the selection range for the text (optional)
    password_ref.current?.setSelectionRange(0, 99999); // This is to ensure the full text is selected
    // Copy the selected text to the clipboard
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  // useEffect to regenerate the password whenever length, numberAllowed, or charAllowed changes
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={password_ref} // Reference to the password input field
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToclipBoard} // Copy button to trigger the copy to clipboard function
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(parseInt(e.target.value)); // Update the length state with the value from the range input
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev); // Toggle the numberAllowed state
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev); // Toggle the charAllowed state
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
