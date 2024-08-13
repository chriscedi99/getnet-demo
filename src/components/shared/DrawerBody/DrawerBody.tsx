import { useState } from "react";
import { Box } from "@mui/material";
import { images } from "../../../assets";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AccountBody } from "./molecules/AccountBody";
import { MenuBody } from "./molecules/MenuBody";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DrawerBody = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box width={300} p={1}>
      <Box
        sx={(theme) => ({
          marginTop: 3,
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            height: 50,
          },
          "&:hover": {
            opacity: 0.7,
            cursor: "pointer",
          },
        })}
      >
        <img src={images.getnetLogo} style={{ height: "100%" }} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 300 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: 300 }}
          >
            <Tab label="Menú" {...a11yProps(0)} sx={{ width: "50%" }} />
            <Tab label="Cuenta" {...a11yProps(1)} sx={{ width: "50%" }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MenuBody />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AccountBody />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
