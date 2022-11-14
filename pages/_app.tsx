import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';

import '@styles/globals.scss';
import store from '@core/store';

type PageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

/**
 * App.
 *
 * @param {AppPropsWithLayout} AppPropsWithLayout App props with layout
 * @return {JSX.Element}
 */
const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default App;
