import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  styles?: any;
}

export const GradientDivider = ({ children, styles }: Props) => {
  return (
    <Box
      sx={{
        ...styles,
        background:
          "linear-gradient(90deg, #7d1442 0%, #7d1442 35%, #ff0000 100%)",
        width: "100%",
        minHeight: "35px",
      }}
    >
      {children}
    </Box>
  );
};
