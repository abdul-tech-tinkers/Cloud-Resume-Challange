import { IconButton } from "@radix-ui/themes";
import React, { ComponentProps, ReactNode } from "react";

interface props extends ComponentProps<"IconButton"> {
  children: ReactNode;
}

function AppIconButton({ children, ...rest }: props) {
  return <IconButton {...rest}>{children}</IconButton>;
}

export default AppIconButton;
