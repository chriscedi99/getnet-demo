import { Box } from "@mui/material";

interface Props {
  image: string;
}

export const PaymentIcon = ({ image }: Props) => {
  return (
    <Box
      sx={{
        height: 30,
        marginX: 1,
      }}
    >
      <img style={{ height: "100%" }} src={image} />
    </Box>
  );
};
