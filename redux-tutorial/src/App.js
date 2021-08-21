import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogged ? <h3>This variable is false so I won't see this</h3> : ''}
    </div>
  );
}

export default App;
