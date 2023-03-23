import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './../../actions';

const Content = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    return (
        <>
            <h1>counter: {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {isLogged ?  <p>Some Imp Info</p> : ''}
        </>
    )
}

export default Content
