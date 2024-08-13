import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
}
export const CustomButton = ({ label }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        display: "inline-flex",
        justifyContent: "center",

        paddingY: 1.5,
        paddingX: 2,
        borderRadius: "0px 0px 16px 16px",
        "&:hover": {
          opacity: 0.7,
          cursor: "pointer",
        },
      }}
    >
      <Typography color="white" fontSize={19}>
        {label}
      </Typography>
    </Box>
  );
};
