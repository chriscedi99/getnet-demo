import { Divider, Box } from "@mui/material";
import { OptionMenu } from "../atoms/OptionMenu";

export const AccountBody = () => {
  return (
    <Box display="flex" flexDirection="column">
      <OptionMenu label="Iniciar sesión" />

      <Divider />
      <OptionMenu label="Crear cuenta" />
    </Box>
  );
};
