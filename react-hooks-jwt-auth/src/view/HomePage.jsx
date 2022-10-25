import React from 'react';
import { Box, Container, Paper, Typography, TextField, Grid, Avatar } from "@mui/material"
import useStyles from '../style/HomepageStyle';
import AboutAccordion from '../components/AboutAccordion'
import Button from '@mui/material/Button';
import HomeTabs from '../components/HomeTabs';


function HomePage(props) {

    const classes = useStyles();

    return (
        <React.Fragment>


            <img src='https://financialfield.vn/wp-content/uploads/2021/06/moto-web-banner.jpg' alt='' style={{ height: "400px", width: "100%", marginTop: "40px" }} />

            <Container sx={{ marginBottom: "40px", marginTop:"40px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper elevation={5}>
                            <Box sx={{ overflow: 'hidden', display: "flex" }}>
                                <Avatar
                                    alt=""
                                    src="https://financialfield.vn/wp-content/uploads/2019/05/chuong-trinh-bao-hiem.png"
                                    sx={{ width: 56, height: 56, marginRight: "10px", maxWidth: "30%" }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                                    <Typography variant='body1'>Phí chỉ từ: </Typography>
                                    <Typography variant='body2' sx={{ fontWeight: "500" }}> 66.000VND</Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={5}>
                            <Box sx={{ overflow: 'hidden', display: "flex" }}>
                                <Avatar
                                    alt=""
                                    src="https://financialfield.vn/wp-content/uploads/2019/05/quyen-loi.png"
                                    sx={{ width: 56, height: 56, marginRight: "10px", maxWidth: "30%" }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                                    <Typography variant='body1'>Mức trách nhiệm: </Typography>
                                    <Typography variant='body2' sx={{ fontWeight: "500" }}> Lên đến 155.000.000VND/năm</Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={5}>
                            <Box sx={{ overflow: 'hidden', display: "flex" }}>
                                <Avatar
                                    alt=""
                                    src="https://financialfield.vn/wp-content/uploads/2019/05/thanh-toan-online.png"
                                    sx={{ width: 56, height: 56, marginRight: "10px", maxWidth: "30%" }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                                    <Typography variant='body1'>Hình thức thanh toán: </Typography>
                                    <Typography variant='body2' sx={{ fontWeight: "500" }}>Online</Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ marginBottom: "40px" }}>
                {/* Item2: About + Register */}
                <Paper className={classes.Bigitem2} elevation={8}>
                    <Container marginY={20} sx={{ width: "50%", textAlign:"center" }}>
                        <Typography variant='h4' marginY={5} sx={{ fontWeight: "500" }}>Register Now!</Typography>
                        <form style={{margin: "40px 0"}}>
                            <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
                                <Box className={classes.regInput1} >
                                    <TextField label="First Name" variant="filled" sx={{ width: "45%", paddingTop:"8px" }} />
                                    <TextField label="Last Name" variant="filled" sx={{ width: "45%", paddingTop:"8px" }} />
                                </Box>
                                <TextField className={classes.regInput2} label="Phone Number" variant="filled" sx={{ width: "100%", paddingTop:"8px" }} />
                                <TextField className={classes.regInput2} label="Email" variant="filled" sx={{ width: "100%", paddingTop:"8px" }} />
                                <Button variant="contained" sx={{ marginLeft: "40%"}}>Subcribe</Button>
                            </Box>
                        </form>
                    </Container>
                    <Container className={classes.abouts} sx={{ width: "50%", textAlign:"center" }}>
                        <Typography variant='h4' marginY={5} sx={{ fontWeight: "500" }} >Why to Buy:</Typography>
                        <AboutAccordion></AboutAccordion>
                    </Container>
                </Paper>
            </Container>

            <Container sx={{ marginBottom: "40px" }}>
                <HomeTabs />
            </Container>

            <div style={{width: "100%", height: "300px", backgroundColor: "#3f5d7a", color:"#fff", display:"flex"}}>
                <h1>I'm the Footer</h1>
            </div>
        </React.Fragment >
    );
}

export default HomePage;