import { Typography } from "@mui/material";

interface Props {
  label: string;
}

export const LinkFooter = ({ label }: Props) => {
  return (
    <Typography
      variant="subtitle1"
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
