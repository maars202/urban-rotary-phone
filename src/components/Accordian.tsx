import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="mb-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary'}} className="font-bold">
            Upstate Elections
          </Typography> */}
          <div className='flex flex-row justify-between w-full'>
          <p className="font-bold text-xl text-blue-900">Upstate Elections</p>
          <p className="font-bold text-xl text-blue-900">02/04/2022</p>
          </div>
         
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

  );
}
