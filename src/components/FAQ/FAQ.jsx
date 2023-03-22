import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id='faq'>
      <Container>
      <Fade direction='Down' delay={100} triggerOnce={true}>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{backgroundColor: '#101655'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  style={{color: 'white'}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{color: 'white'}}
          >
            <Typography sx={{ width: "60%", flexShrink: 0, color: '#FFF' }}>
              ¿CUANTO TIEMPO TARDA EN LLEGARME LA PLANIFICACIÓN?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: '#3C4AA5'}}>
            <Typography sx={{color: 'white'}}>
              Una vez que se reciba el pago y la planilla completada, se le
              mandará la rutina entre 24-48 hs, para comenzar con la rutina y
              las dudas ya resueltas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{backgroundColor: '#101655'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0, color: '#FFF'  }}>
              ¿CADA CUANTO SE CAMBIA LA RUTINA Y/O DIETA?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: '#3C4AA5'}}>
            <Typography sx={{color: 'white'}}>
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
          style={{backgroundColor: '#101655'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0, color: '#FFF'  }}>
              ¿COMO ME CONTACTO PARA COMENZAR?
            </Typography>
           
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: '#3C4AA5'}}>
            <Typography sx={{color: 'white'}}>
            TOCA EL BOTON DE CONTACTO Y COMUNICATE CONMIGO
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={{backgroundColor: '#101655'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "60%", flexShrink: 0, color: '#FFF'  }}>
              ¿AL MOMENTO DE RENOVAR EL PLAN, CUANDO TENGO QUE PAGAR?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: '#3C4AA5'}}>
            <Typography sx={{color: 'white'}}>
              Al mes de inicio de su planificacion, es decir si comenzo un 4 de
              abril el siguiente pago es el 4 de mayo
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Fade>
      </Container>
    </div>
  );
};

export default FAQ;
