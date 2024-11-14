import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailPassword, startGoogleSignIn, startLogout } from '../store/slice/auth/thunks';

const AuthButtons = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => dispatch(startLogout())}>Logout</button>
      ) : (
        <>
          <button onClick={() => dispatch(loginWithEmailPassword('test@example.com', 'password123'))}>Login with Email</button>
          <button onClick={() => dispatch(startGoogleSignIn())}>Login with Google</button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
