import { Box } from "@mui/material";

interface Props {
  image: string;
}

export const BankCard = ({ image }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        height: 55,
        width: 80,
        [theme.breakpoints.down("sm")]: {
          height: 35,
          width: 50,
        },
      })}
    >
      <img src={image} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};
