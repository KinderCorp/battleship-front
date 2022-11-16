import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';

import '@styles/index.scss';
import store from '@src/core/store';

type PageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

/**
 * App.
 *
 * @param {AppPropsWithLayout} props Props
 * @return {JSX.Element}
 */
const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default App;
