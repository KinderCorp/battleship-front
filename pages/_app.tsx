import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

// Styles
import '@styles/globals.scss';

type PageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

/**
 * App component.
 *
 * @param {AppPropsWithLayout} AppPropsWithLayout App props with layout
 * @return {JSX.Element}
 */
const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
