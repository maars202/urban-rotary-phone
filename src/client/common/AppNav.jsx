import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collection from '../../pages/Collection';
import Nftprofile from '../../pages/NftProfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const appNavComponents = [
  {
    label: 'NFTs',
    view: <Collection />
  },
  {
    label: 'Marketplace',
    view: <Nftprofile />
  }
]

export default function AppNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          {
            appNavComponents.map((headerData, index) => (
              <Tab label={headerData.label} {...a11yProps(index)} />
            ))
          }
        </Tabs>
      </Box>
      {
        appNavComponents.map((headerData, index) => (
          <TabPanel value={value} index={index}>
            {headerData.view}
          </TabPanel>
        ))
      }
    </Box>
  );
}
