import { IconButton } from "@radix-ui/themes";
import { ComponentProps, ReactNode } from "react";

interface props extends ComponentProps<"IconButton"> {
  children: ReactNode;
  onClick: () => void;
}

const AppIconButton = ({ children, onClick, ...rest }: props) => {
  return (
    <IconButton onClick={onClick} {...rest}>
      {children}
    </IconButton>
  );
};

export default AppIconButton;
