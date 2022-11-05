import type { AppProps } from 'next/app';

// Components
import { PageWithLayout } from '@shared/Layout/models';

// Styles
import '@styles/globals.scss';

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

/**
 * App component.
 *
 * @param {AppPropsWithLayout} AppPropsWithLayout App props with layout
 * @return {JSX.Element}
 */
export const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
