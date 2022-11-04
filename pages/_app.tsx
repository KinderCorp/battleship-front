// Library
import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.scss';

/**
 * App component.
 *
 * @param {AppProps} AppProps Props
 * @return {JSX.Element}
 */
export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
