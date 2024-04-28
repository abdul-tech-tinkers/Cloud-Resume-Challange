import { Link } from "@radix-ui/themes";
import { ComponentProps, ReactNode } from "react";

interface props extends ComponentProps<"Link"> {
  children: ReactNode;
  href: string;
}

const AppLink = ({ children, href, ...rest }: props) => {
  return (
    <Link underline="none" href={href} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
