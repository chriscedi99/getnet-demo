import { images } from "../../../assets";
import { ContainerSpace } from "../../shared/ContainerSpace/ContainerSpace";
import { useTheme, Grid, Box } from "@mui/material";
import { CustomButton } from "../../shared/CustomButton/CustomButton";

export const Products = () => {
  const theme = useTheme();

  return (
    <div>
      <ContainerSpace>
        <Grid container paddingY={10}>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 90,
                [theme.breakpoints.down("sm")]: {
                  height: 80,
                },
              })}
            >
              <img
                src={images.gMiniTitle}
                style={{ height: "100%", marginBottom: 10 }}
              />
            </Box>
            <CustomButton label="Conoce más" />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 350,
                width: "100%",
                paddingY: 2,
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  height: 280,
                },
              })}
            >
              <img src={images.gMini} style={{ height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </ContainerSpace>
      <ContainerSpace styles={{ backgroundColor: theme.palette.grey[200] }}>
        <Grid
          container
          paddingY={10}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 350,
                width: "100%",
                paddingY: 2,
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  height: 280,
                },
              })}
            >
              <img src={images.gSmart} style={{ height: "100%" }} />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 90,
                [theme.breakpoints.down("sm")]: {
                  height: 80,
                },
              })}
            >
              <img
                src={images.gSmartTitle}
                style={{ height: "100%", width: "100%", marginBottom: 10 }}
              />
            </Box>
            <CustomButton label="Conoce más" />
          </Grid>
        </Grid>
        <Grid
          container
          paddingY={10}
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          })}
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 90,
                [theme.breakpoints.down("sm")]: {
                  height: 80,
                },
              })}
            >
              <img
                src={images.gSmartTitle}
                style={{ height: "100%", width: "100%", marginBottom: 10 }}
              />
            </Box>
            <CustomButton label="Conoce más" />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 350,
                width: "100%",
                paddingY: 2,
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  height: 280,
                },
              })}
            >
              <img src={images.gSmart} style={{ height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </ContainerSpace>
      <ContainerSpace>
        <Grid container paddingY={10}>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 90,
                [theme.breakpoints.down("sm")]: {
                  height: 80,
                },
              })}
            >
              <img
                src={images.gAdvanceTitle}
                style={{ marginBottom: 10, height: "100%", width: "100%" }}
              />
            </Box>
            <CustomButton label="Conoce más" />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={(theme) => ({
                height: 350,
                paddingY: 2,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  height: 280,
                },
              })}
            >
              <img src={images.gAdvance} style={{ height: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </ContainerSpace>
    </div>
  );
};
