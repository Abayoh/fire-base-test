import { useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.config';

function App() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className='App'
      style={{
        margin: '24px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={state.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          value={state.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={state.password}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
