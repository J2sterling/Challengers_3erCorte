import { login, logout, checkingCredentials } from './authSlice';
import { auth, googleAuthProvider } from '../../../firebase/config';
import { signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';

// Función asíncrona para el inicio de sesión con correo y contraseña
export const loginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = result.user;
      
      dispatch(login({ uid, email, displayName, photoURL }));
    } catch (error) {
      console.error('Error en login:', error);
      dispatch(logout({ errorMessage: 'Error al iniciar sesión' }));
    }
  };
};

// Función para cerrar sesión
export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};

// Función para inicio de sesión con Google
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const { uid, displayName, email, photoURL } = result.user;
      
      dispatch(login({ uid, email, displayName, photoURL }));
    } catch (error) {
      console.error('Error en Google sign-in:', error);
      dispatch(logout({ errorMessage: 'Error al iniciar sesión con Google' }));
    }
  };
};
