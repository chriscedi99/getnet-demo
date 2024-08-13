import { useState } from "react";
import { images } from "../../../assets";
import { Box, IconButton, Drawer } from "@mui/material";
import { RouteHeader } from "./atoms/RouteHeader";
import { DividerHeader } from "./atoms/DividerHeader";
import { IconHeader } from "./atoms/IconHeader";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerBody } from "../DrawerBody/DrawerBody";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingY: 1,
        [theme.breakpoints.down("md")]: {
          justifyContent: "space-between",
          paddingX: 6,
        },
      })}
    >
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerBody />
      </Drawer>
      <Box
        sx={(theme) => ({
          height: 70,
          [theme.breakpoints.down("md")]: {
            display: "none",
            height: 30,
          },
          "&:hover": {
            opacity: 0.7,
            cursor: "pointer",
          },
        })}
      >
        <img src={images.getnetLogo} style={{ height: "100%" }} />
      </Box>

      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Box
          sx={(theme) => ({
            height: 70,
            [theme.breakpoints.down("md")]: {
              height: 30,
            },
            "&:hover": {
              opacity: 0.7,
              cursor: "pointer",
            },
          })}
        >
          <img src={images.getnetLogo} style={{ height: "100%" }} />
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          height: "26px",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <RouteHeader label="Nuestra oferta" />
        <DividerHeader />
        <RouteHeader label="Tienda en línea" />
        <DividerHeader />
        <RouteHeader label="¿Quiénes somos?" />
      </Box>
      <Box display="flex">
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        >
          <IconButton>
            <IconHeader icon={images.getnetIcon} />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon color="error" />
          </IconButton>
        </Box>
        <IconButton>
          <PhoneInTalkIcon color="error" />
        </IconButton>
      </Box>
    </Box>
  );
};
