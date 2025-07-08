import { useState } from "react";
import "./App.css";

function App() {
  const [lineNumber, setLineNumber] = useState(32);

  return (
    <main className="h-screen w-screen m-auto">
      <div className="max-w-md bg-white mx-auto my-20 p-5 shadow-xl">
        <div className="text-red-500">Roses are red</div>
        <div className="text-violet-500">Violets are blue</div>
        <div className="text-gray-600">Cannot Read Property of Undefined</div>
        <div className="text-gray-600">
          On <span className="underline">line {lineNumber}</span>
        </div>
      </div>
    </main>
  );
}

export default App;
