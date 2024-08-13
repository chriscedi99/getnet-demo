import { Box } from "@mui/material";

interface Props {
  image: string;
}
export const BodyCarrousel = ({ image }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: `url('${image}')`,
        height: 620,
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]: {
          height: 320,
        },
        [theme.breakpoints.down("sm")]: {
          height: 180,
        },
        [theme.breakpoints.down("xs")]: {
          height: 150,
        },
      })}
    ></Box>
  );
};
