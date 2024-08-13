import { Grid, Typography } from "@mui/material";
import { ContainerSpace } from "../../shared/ContainerSpace/ContainerSpace";
import { images } from "../../../assets";

export const MobileInformation = () => {
  return (
    <ContainerSpace styles={{ backgroundColor: "#a01c54" }}>
      <Grid
        container
        sx={{
          paddingY: 8,
        }}
      >
        <Grid item sm={12} md={6}>
          <Typography variant="h5" fontWeight={"100"} pb={3} color={"white"}>
            Sin importar la Terminal que elijas, con Getnet siempre tendrás la
            misma experiencia gracias a nuestra app.
          </Typography>
          <Typography color="white" variant="subtitle1" pb={4}>
            Con su beneficio Ligas de Pago, cobra a distancia y sin contacto
            utilizando ligas o códigos QR.
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={(theme) => ({
            borderLeft: "2px solid white",
            [theme.breakpoints.down("md")]: {
              borderLeft: "none",
            },
          })}
        >
          <Typography
            textAlign="center"
            color="white"
            variant="subtitle1"
            fontWeight={700}
          >
            Descarga la app que te conecta con tu Terminal inteligente
          </Typography>

          <Grid container pt={4}>
            <Grid
              item
              md={5}
              sm={12}
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
              pb={2}
            >
              <img src={images.appGetnet} style={{ height: 90 }} />
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={7}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <img
                src={images.appleButton}
                style={{ width: 160, marginBottom: 10 }}
              />
              <img src={images.googleButton} style={{ width: 160 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContainerSpace>
  );
};
