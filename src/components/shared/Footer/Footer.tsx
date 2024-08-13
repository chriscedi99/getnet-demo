import { Box, Grid, IconButton, Typography } from "@mui/material";
import { LinkFooter } from "./atoms/LinkFooter";
import { images } from "../../../assets";
import { PaymentIcon } from "./atoms/PaymentIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const paymentList = [
    images.masterLogo,
    images.visaLogo,
    images.discoverLogo,
    images.dinerLogo,
  ];
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "#d8d4d4",
        paddingTop: 8,
        paddingBottom: 6,
        paddingX: 18,
        [theme.breakpoints.down("sm")]: {
          paddingX: 8,
        },
      })}
    >
      <Grid container spacing={3}>
        <Grid item sm={6} md={3}>
          <Typography color="secondary" pb={3}>
            NOSOTROS
          </Typography>
          <LinkFooter label="Nuestra oferta" />
          <LinkFooter
            label="
          Tienda en línea"
          />
          <LinkFooter label="¿Quiénes somos?" />
          <LinkFooter label="Contáctanos" />
          <LinkFooter label="Quejas y sugerencias" />
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography color="secondary" pb={3}>
            SOPORTE TÉCNICO
          </Typography>
          <Typography color={(theme) => theme.palette.grey[600]}>
            Para los equipos NO adquiridos en Getnet.mx, envíanos un mensaje de
            Whatsapp o llama al : 5591779899
          </Typography>

          <Typography color={(theme) => theme.palette.grey[600]} pt={5}>
            Para dudas sobre equipos adquiridos en Getnet.mx llama al:{" "}
            <b>55 9990 0354</b>
          </Typography>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography color="secondary" pb={3}>
            LEGALES
          </Typography>
          <LinkFooter label="Aviso de Privacidad" />
          <LinkFooter label=" Términos y Condiciones" />
          <LinkFooter label="Manual Afiliado" />
          <LinkFooter label="Manual Afiliado e-Commerce" />
          <LinkFooter label="Clausulado del contrato de afiliación" />
          <LinkFooter label="Políticas de devolución Facturación" />
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography color="secondary" pb={3}>
            MÉTODOS DE PAGO
          </Typography>
          <Typography color={(theme) => theme.palette.grey[600]} pb={5}>
            Adquiere tu Terminal con Tarjetas participantes:
          </Typography>
          <Box display="flex">
            {paymentList.map((item) => (
              <PaymentIcon image={item} key={item} />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        py={4}
      >
        <Typography color="secondary">Siguenos en nuestras redes</Typography>
        <Box>
          <IconButton>
            <FacebookIcon color="secondary" />
          </IconButton>
          <IconButton>
            <InstagramIcon color="secondary" />
          </IconButton>
          <IconButton>
            <LinkedInIcon color="secondary" />
          </IconButton>
          <IconButton>
            <XIcon color="secondary" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
