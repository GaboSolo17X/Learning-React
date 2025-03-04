import { useCounter } from "../Hook/useCounter"

export const CounterWithCustomHook = () => {

  const {counter,increment,reset,substract}=useCounter();
  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={increment}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={substract}>-1</button>

    
    </>
  )
}
