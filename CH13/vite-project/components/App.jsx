import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../src/store/counterSlice';

export const App = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>App</h1>
      <hr />
      <span>Counter is: { counter } </span>
      <div>
        <button className='btn btn-primary' onClick={() => dispatch(increment())}>
          +1
        </button>
        <button className='btn btn-secondary' onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button className='btn btn-success' onClick={() => dispatch(incrementBy(5))}>
          +5
        </button>
      </div>
    </div>
  );
};

