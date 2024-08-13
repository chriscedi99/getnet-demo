import { Box, Typography } from "@mui/material";
import { BankCard } from "../atoms/BankCard";
import { images } from "../../../assets";

const bankList = [
  {
    image: images.masterLogo,
  },
  {
    image: images.visaLogo,
  },
  {
    image: images.discoverLogo,
  },
  {
    image: images.dinerLogo,
  },
  {
    image: images.carnetLogo,
  },
  {
    image: images.upLogo,
  },
];

export const Solutions = () => {
  return (
    <Box
      sx={{
        paddingY: 10,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="red"
        sx={{ paddingBottom: 2 }}
        letterSpacing={0.1}
      >
        Nuestras soluciones para ti
      </Typography>
      <Typography fontWeight={600} variant="body1" sx={{ fontSize: 19 }}>
        Acepta pagos con cualquier tarjeta
      </Typography>
      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent="space-around"
        pt={4}
      >
        {bankList.map((bank) => (
          <BankCard key={bank.image} image={bank.image} />
        ))}
      </Box>
    </Box>
  );
};
