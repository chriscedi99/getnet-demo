import { Header } from "./components/shared/Header/Header";
import { GradientDivider } from "./components/shared/GradientDivider/GradientDivider";
import { Carrousel } from "./components/shared/Carrousel/Carrousel";
import { images } from "./assets";
import { Solutions } from "./components/Home/Solutions/Solutions";
import { ContainerSpace } from "./components/shared/ContainerSpace/ContainerSpace";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import { Products } from "./components/Home/Products/Products";
import { MobileInformation } from "./components/Home/MobileInformation/MobileInformation";
import { BlogSection } from "./components/Home/BlogSection/BlogSection";
import { Footer } from "./components/shared/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GradientDivider />
      <Carrousel
        images={[
          {
            image: images.image1,
          },
          {
            image: images.image2,
          },
        ]}
      />
      <ContainerSpace styles={{ backgroundColor: "white" }}>
        <Solutions />
      </ContainerSpace>
      <Products />
      <Carrousel
        images={[
          {
            image: images.image3,
          },
          {
            image: images.image4,
          },
        ]}
      />

      <MobileInformation />
      <BlogSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
