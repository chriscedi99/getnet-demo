import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styles?: any;
}

export const ContainerSpace = ({ children, styles }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        ...styles,
        paddingX: 38,
        [theme.breakpoints.down("lg")]: {
          paddingX: 10,
        },
        [theme.breakpoints.down("sm")]: {
          paddingX: 4,
        },
      })}
    >
      {children}
    </Box>
  );
};
