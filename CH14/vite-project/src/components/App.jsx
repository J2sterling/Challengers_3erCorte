import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { login, logout } from '../store/slice/auth/authSlice';
import AuthButtons from '../components/authBottoms';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Firebase Auth Challenge</h1>
      <AuthButtons />
    </div>
  );
};

export default App;
