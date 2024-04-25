import { IconButton } from "@radix-ui/themes";
import React, { ComponentProps, ReactNode } from "react";

interface props extends ComponentProps<"IconButton"> {
  children: ReactNode;
  onClick: () => void;
}

function AppIconButton({ children, onClick, ...rest }: props) {
  return (
    <IconButton onClick={onClick} {...rest}>
      {children}
    </IconButton>
  );
}

export default AppIconButton;
