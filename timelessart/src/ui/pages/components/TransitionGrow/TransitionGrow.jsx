import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function TransitionGrow({ component }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  
    return (
      <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: 'flex' }}>
          <Grow in={checked}>{component}</Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {component}
          </Grow>
        </Box>
      </Box>
    );
}
