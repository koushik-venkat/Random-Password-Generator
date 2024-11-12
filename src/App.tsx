import "./App.css";
import { useCallback, useState, useEffect } from "react";
import Password from "./components/Password";
import Options from "./components/Options";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVYXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumber) str += "0123456789";
    if (includeCharacters) str += "!@#$%^&*(){}[]_-;/?.><,";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    console.log(pass);

    setPassword(pass);
  }, [length, includeNumber, includeCharacters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, includeCharacters]);

  return (
    <div className="bg-green-200 w-full h-screen">
      <h1 className="text-4xl text-center py-10">Password Generator</h1>
      <Password password={password}/>
      <Options
        length={length}
        setLength={setLength}
        setIncludeNumber={setIncludeNumber}
        setIncludeCharacters={setIncludeCharacters}
      />
    </div>
  );
}

export default App;
