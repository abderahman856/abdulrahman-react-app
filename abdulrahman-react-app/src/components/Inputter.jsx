import { useState } from "react";

function Inputter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    };
    return (
      <div>
        <input type="text" value={text} onChange={handleChange} />  
        <p> You typed: {text}</p>
      </div>
      );
      }
      export default Inputter;