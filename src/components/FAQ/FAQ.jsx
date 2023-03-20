import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Container>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0 }}>
              ¿CUANTO TIEMPO TARDA EN LLEGARME LA PLANIFICACIÓN?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Una vez que se reciba el pago y la planilla completada, se le
              mandará la rutina entre 24-48 hs, para comenzar con la rutina y
              las dudas ya resueltas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0 }}>
              ¿CADA CUANTO SE CAMBIA LA RUTINA Y/O DIETA?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Depende exclusivamente de vos, se te haran chequeos
              mensuales/semanales/diarios (depende del pack que elijas) para ver
              como estas respondiendo a la rutina, si no estas respondiendo bien
              se te RETOCARA la rutina o dieta, en caso de no necesitar
              retocarla, no hará falta gastar cartas bajo la manga y seguirás
              con la misma rutina hasta que el estimulo te quede corto.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0 }}>
              ¿COMO ME CONTACTO PARA COMENZAR?
            </Typography>
           
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            TOCA EL BOTON «QUIERO COMENZAR YA» PARA COMENZAR ! o el de wp o ig
              el q se ponga (*)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0 }}>
              ¿AL MOMENTO DE RENOVAR EL PLAN, CUANDO TENGO QUE PAGAR?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              al mes de inicio de su planificacion, es decir si comenzo un 4 de
              abril el siguiente pago es el 4 de mayo
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
