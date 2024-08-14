import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    return(
        <div>
            <p>{count}</p>
            
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input type = "number" />
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    )
}

export default Counter;