import { Box, Typography, Button } from "@mui/material";

interface Props {
  textData: string;
}

export const BlogCard = ({ textData }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={(theme) => ({
        paddingY: 4,
        marginY: 2,
        borderRadius: 10,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(
            to right,
            ${theme.palette.grey[200]} 0%,
            ${theme.palette.grey[200]} 50%,
            transparent 50%
          )`,
          transition: "background-position 0.5s ease",
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0%",
          zIndex: -1,
        },
        "&:hover:before": {
          backgroundPosition: "0% 0%",
        },
      })}
    >
      <Typography
        variant="h5"
        p={2}
        sx={{
          fontWeight: 900,
          color: "red",
          "&:hover": {
            color: "#a01c54",
            cursor: "pointer",
          },
        }}
      >
        {textData}
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ borderRadius: 10, textTransform: "none" }}
      >
        <Typography>Conocer más</Typography>
      </Button>
    </Box>
  );
};
