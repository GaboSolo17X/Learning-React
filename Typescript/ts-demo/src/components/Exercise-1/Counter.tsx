import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const handleAdd=()=>{

        setCount(count+1)

    }

    const handleMinus=()=>{

        setCount(count-1)

    }

  return (
    <div>
        <h1>Counter App</h1>

        <button onClick={handleAdd}>Increment</button>
        <p>Count {count}</p>


        <button onClick={handleMinus}>Decrement</button>

    </div>
    
  )
}
