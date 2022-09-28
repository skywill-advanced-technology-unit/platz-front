import { useContext, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { AuthContext } from './contexts/AuthProvider';

// ----------------------------------------------------------------------

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { user } = props;
  const authContext = useContext(AuthContext);
  const { setCognitoData } = authContext;

  useEffect(() => {
    setCognitoData(user);
  }, [setCognitoData, user]);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
