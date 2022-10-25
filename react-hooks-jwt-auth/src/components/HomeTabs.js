import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SortIcon from '@mui/icons-material/Sort';

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
                    <Typography>{children}</Typography>
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

export default function HomeTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Registration Procedure" {...a11yProps(0)} />
                    <Tab label="Benefits and Fee chart" {...a11yProps(1)} />
                </Tabs>
            </Box>
            
            <TabPanel value={value} index={0}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap" }}>
                    <Box>
                        <img
                            src="https://financialfield.vn/wp-content/themes/financialfield/assets/img/process/dien-form.png"
                            alt="Step1"
                        ></img>
                        <Typography variant='h6' sx={{ fontWeight: "600", color: "#007dc4" }}>Step 1:</Typography>
                        <Typography variant='body1'>Clarify ambiguities with counselors</Typography>
                    </Box>
                    <Box>
                    <img
                        src="https://financialfield.vn/wp-content/themes/financialfield/assets/img/process/thanh-toan.png"
                        alt="Step2"
                    ></img>
                    <Typography variant='h6' sx={{ fontWeight: "600", color: "#007dc4" }}>Step 2:</Typography>
                    <Typography variant='body1'>Proceed to payment</Typography>
                    </Box>

                    <Box>
                    <img
                        src="https://financialfield.vn/wp-content/themes/financialfield/assets/img/process/nhan-hop-dong.png"
                        alt="Step3"
                    ></img>
                    <Typography variant='h6' sx={{ fontWeight: "600", color: "#007dc4" }}>Step 3:</Typography>
                    <Typography variant='body1'>Receive insurance contract</Typography>
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Điền vào
            </TabPanel>
        </Box>
    );
}
