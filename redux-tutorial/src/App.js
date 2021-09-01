import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import {LocalForm, Control} from 'react-redux-form'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const input = useSelector(state => state.input)
  const dispatch = useDispatch()

  handleChange(values) 
  handleUpdate(form) 
  handleSubmit(values) 

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>This variable is false so I won't see this</h3> : ''}

      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model="testForm"/>
      </LocalForm>
    </div>
  );
}

export default App;
