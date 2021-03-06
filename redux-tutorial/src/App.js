import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import {FormPage} from './containers/formPage'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const input = useSelector(state => state.input)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>This variable is false so I won't see this</h3> : ''}
      <FormPage/>

    </div>
  );
}

export default App;
