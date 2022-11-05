import type { NextPage } from 'next';

export type PageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};
