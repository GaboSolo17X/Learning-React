import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counter/counterSlice";

export const Counter = () => {
  //Leer la data del store
  const count = useSelector((state) => state.counter.value);

  //Cambiando la data enviando las acciones a la store.
  const dispatch = useDispatch();

  const handlePlus = () =>{
    dispatch(increment())
  }

  const handleMinus = () =>{
    dispatch(decrement())
  }

  return (
    <>
      
      <button onClick={handlePlus}>
        +
      </button>
      <div>{count}</div>
      <button onClick={handleMinus}>
        -
      </button>
    </>
  );
};
