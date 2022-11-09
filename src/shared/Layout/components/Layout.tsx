interface Props {
  children: JSX.Element;
}

/**
 * Layout component.
 *
 * @param {Props} props Layout props
 * @return {JSX.Element}
 */
export const Layout = ({ children }: Props): JSX.Element => {
  return children;
};

export default Layout;
