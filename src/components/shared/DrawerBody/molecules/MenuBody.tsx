import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OptionMenu } from "../atoms/OptionMenu";

export const MenuBody = () => {
  return (
    <div>
      <Accordion sx={{ backgroundColor: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
        >
          Nuestra oferta
        </AccordionSummary>
        <AccordionDetails>
          <OptionMenu label="Nuestra oferta" />
          <OptionMenu label="Opciones de pago fijas y móviles" />
          <OptionMenu label="G Mini" />
          <OptionMenu label="G Smart" />
          <OptionMenu label="G Advance" />
          <OptionMenu label="G Pos" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
        >
          Tienda en línea
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
        >
          ¿Quiénes somos?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
