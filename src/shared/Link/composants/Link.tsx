import type { LinkProps } from "@shared/Link/model";
import NextLink from 'next/link';

/**
 * Link component.
 *
 * @param {LinkProps} props Props
 * @return {JSX.Element}
 */
const Link = ({
    className= "link",
    children = null,
    href = ""
}:LinkProps): JSX.Element => {

    return (
        <NextLink href={href} className={className}>
            {children}
        </NextLink>
    )
}

export default Link;