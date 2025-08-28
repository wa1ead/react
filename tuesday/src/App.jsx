import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value); // capture input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (text === "walid") {
      alert(`Submitted: ${text}`);
    } else {
      alert("error, machi walid");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
