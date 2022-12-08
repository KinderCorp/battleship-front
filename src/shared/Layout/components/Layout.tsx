import type { LayoutProps } from '@shared/Layout/models';

/**
 * Layout component.
 *
 * @param {LayoutProps} props Props
 * @return {JSX.Element}
 */
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <main id="page">{children}</main>;
};

export default Layout;
