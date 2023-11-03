
import {useEffect, useState} from "react";
function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count === 0) {
        clearInterval(countdownInterval);
        alert("Countdown reached 0!");
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        Countdown : {count}
      </header>
    </div>
  );
};

export default App;
