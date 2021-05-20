
import Link from 'next/link';

export const NavLink = ({ path, label, children, ...rest }) => {
  return (
    <h1>NavLink</h1>
  );
}

export const CustomLink = ({ path, label, children, ...rest }) => {
  return (
    <Link {...rest} href={path}>
      {children || label}
    </Link>
  );
}
