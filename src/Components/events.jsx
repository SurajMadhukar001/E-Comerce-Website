import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/counter-slice";

const CountEvent = () => {
  const dispatch = useDispatch();
  //calling store
  const counterslice = useSelector((state) => state.counter);
  const HandleDecrement = () => {
    if (counterslice.value === 0) {
      alert("Not Allowed!");
      return 0;
    } else {
      //setNumber(number -1)
      dispatch(decrement());
    }
  };
  return (
    <>
      {/* <button
        className="btn btn-danger ms-5"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn btn-info ms-5"
        onClick={HandleDecrement}
      >
        Decrement
      </button> */}
    </>
  );
};
export default CountEvent;
