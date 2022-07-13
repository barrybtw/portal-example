import React, { createContext, ReactNode } from "react";

type ICounterContext = {
  setter: React.Dispatch<React.SetStateAction<number>>;
  getter: number;
};

const Counter = createContext<ICounterContext | null>(null);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = React.useState(0);

  return (
    <Counter.Provider
      value={{
        getter: count,
        setter: setCount,
      }}
    >
      {children}
    </Counter.Provider>
  );
};

export const useCounter = () => {
  const context = React.useContext(Counter);

  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export default CounterProvider;
