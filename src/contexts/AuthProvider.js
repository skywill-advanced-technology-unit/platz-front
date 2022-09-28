import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({
  auth: {},
  setCognitoData: () => undefined,
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const setCognitoData = (user) => {
    setAuth(user);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        setCognitoData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
