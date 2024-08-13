import { Typography } from "@mui/material";

interface Props {
  label: string;
}

export const RouteHeader = ({ label }: Props) => {
  return (
    <Typography
      sx={{
        color: "gray",
        fontWeight: "700",
        fontSize: "16px",
        "&:hover": {
          cursor: "pointer",
          color: "black",

          borderBottom: "3px solid red",
        },
      }}
    >
      {label}
    </Typography>
  );
};
