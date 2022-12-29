import type { LinkProps as NextLinkProps } from "next/link";
import type { ReactNode } from "react";

export interface LinkProps extends Omit<NextLinkProps, ""> {
    className?: string;
    children?: ReactNode;
}