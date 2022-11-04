// Library
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

// Styles
import '../styles/globals.css';

/**
 * App component.
 *
 * @param {AppProps} AppProps Props
 * @return {ReactNode}
 */
export const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};

export default App;
