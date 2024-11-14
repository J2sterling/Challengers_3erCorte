import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { logout, register } from '../store/slices/auth/authSlice';
import { useForm } from '../hooks/useForm';
import { registerAuth } from '../store/slices/auth/thunks';

const Registro = () => {
  const dispatch = useDispatch();

  // Usamos el hook personalizado useForm para manejar el estado del formulario
  const { email, password, onInputChange, formState } = useForm({
    email: 'jlopez0313@gmail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch(registerAuth(email, password));
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());
      dispatch(register({ email: user.email }));
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          name="email"
          type="email"
          onChange={(event) => onInputChange(event)}
          value={email}
        />
        <input
          name="password"
          type="password"
          onChange={(event) => onInputChange(event)}
          value={password}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
};

export default Registro;
