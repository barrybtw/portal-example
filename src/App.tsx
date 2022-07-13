import CounterProvider, { useCounter } from "./context/CounterContext";
import { Portal } from "react-portal";

function Thing() {
  const Counter = useCounter();
  return (
    <div>
      <Portal node={document && document.getElementById("thing")}>
        <h2>Counter outside of the React Root</h2>
        <hr />
        {typeof Counter?.getter === "number" ? (
          <div>
            <p>{Counter.getter}</p>
          </div>
        ) : null}
        {Counter?.setter ? (
          <div>
            <button onClick={() => Counter.setter((previous) => previous + 1)}>
              Increase
            </button>
            <button onClick={() => Counter.setter((previous) => previous - 1)}>
              Decrease
            </button>
          </div>
        ) : null}
      </Portal>
      This is inside the React Root
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterProvider>
        <Thing />
      </CounterProvider>
    </div>
  );
}

export default App;
