import { Typography } from "@mui/material";

interface Props {
  label: string;
}
export const OptionMenu = ({ label }: Props) => {
  return (
    <Typography
      py={2}
      sx={(theme) => ({
        color: theme.palette.grey[600],
        "&:hover": {
          color: theme.palette.grey[500],
          cursor: "pointer",
        },
      })}
    >
      {label}
    </Typography>
  );
};
