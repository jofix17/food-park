import { ForwardedRef, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

const RouterLink = forwardRef(
  (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { to, ...other } = props;

    return <Link ref={ref} to={to} {...other} />;
  }
);

export default RouterLink;
