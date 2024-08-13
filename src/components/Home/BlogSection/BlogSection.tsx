import { Typography, Box } from "@mui/material";
import { ContainerSpace } from "../../shared/ContainerSpace/ContainerSpace";
import { Button } from "@mui/material";
import { BlogCard } from "./atoms/BlogCard";
import { GradientDivider } from "../../shared/GradientDivider/GradientDivider";
import { images } from "../../../assets";

export const BlogSection = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
      })}
    >
      <ContainerSpace styles={{ backgroundColor: "red", paddingY: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "white",
          }}
        >
          Consulta nuestro Blog
        </Typography>
        <Box width="100%" display="flex" justifyContent="flex-end" pt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c80404",
              padding: 2,
              color: "white",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "#c80404",
                opacity: 0.9,
              },
            }}
          >
            <Typography> Más articulos</Typography>
          </Button>
        </Box>
      </ContainerSpace>
      <ContainerSpace>
        <BlogCard textData="Cinco tendencias de pago por observar en 2024" />
        <BlogCard
          textData=" Qué pueden esperar los comerciantes de la inteligencia artificial
            (IA)"
        />
        <BlogCard textData="Cuesta de enero" />
      </ContainerSpace>
      <Typography textAlign="center" variant="h4" color="#a01c54" py={3}>
        EL FUTURO ES TUYO
      </Typography>
      <GradientDivider
        styles={{
          paddingY: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={images.getnetWhite} height={40} />
      </GradientDivider>
    </Box>
  );
};
