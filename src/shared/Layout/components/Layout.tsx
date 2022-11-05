type Props = {
  children: JSX.Element;
};

/**
 * Layout component.
 *
 * @param {Props} props Layout props
 * @return {JSX.Element}
 */
export const Layout = (props: Props): JSX.Element => {
  return props.children;
};

export default Layout;
