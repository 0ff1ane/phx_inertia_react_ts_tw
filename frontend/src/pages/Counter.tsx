import { useCallback, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  return (
    <>
      <div className="max-w-2xl h-full mx-auto my-24 py-24 bg-white shadow-xl rounded-lg flex flex-col items-center gap-5">
        <div className="text-lg">Simple Counter</div>
        <div className="flex gap-5 justify-center">
          <button
            className={`text-2xl ${count === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={decrement}
          >
            &#8722;
          </button>
          <div className="text-2xl text-red-500 min-w-12 text-center">
            {count}
          </div>
          <button className="cursor-pointer text-2xl" onClick={increment}>
            &#43;
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        inertia props = {JSON.stringify(props)}
      </div>
    </>
  );
}

export default Counter;

