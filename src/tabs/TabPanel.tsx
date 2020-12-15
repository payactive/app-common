import { Box, Typography } from '@material-ui/core';
import React from 'react';



interface Props {
    index: number,
    value: number
}

const TabPanel: React.FC <Props> = ({index, value, children, ...other}) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default TabPanel