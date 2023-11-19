import { Container, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import styles from 'styles/Home.module.scss'
import stylesSignin from 'pages/auth/signin.module.scss'
import ImageCollage from 'components/ImageCollage'
const About = () => {
    return (
        <Container className={styles.container} maxWidth={'xl'} sx={{ paddingTop: "40px" }}>
            <Box sx={{ flexGrow: 1, paddingTop: "60px", marginBottom: { xs: "100px", md: '0' } }} >
                <Grid container spacing={4} >
                    <Grid sx={{ marginBottom: { xs: "20px", md: '0' } }} item xs={12} md={6} className={stylesSignin.bg_image}>
                        <img src='/about.jpg' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3'>About Us</Typography>
                        <Typography variant='body1'>If you are going to be building or selling products or services, you are going to get asked questions...
                            Skillbuilder is a product built out of maad labs to help users easily identify commonly asked questions and crowdsource their teams for the best answers. SkillBuilder is the simplest way to organize a database and visualize all the questions you are getting asked by colleagues, prospects, and clients, in one easy-to-search place.</Typography>
                        <Typography variant='body1'>If you are going to be building or selling products or services, you are going to get asked questions...
                            Skillbuilder is a product built out of maad labs to help users easily identify commonly asked questions and crowdsource their teams for the best answers. SkillBuilder is the simplest way to organize a database and visualize all the questions you are getting asked by colleagues, prospects, and clients, in one easy-to-search place.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <ImageCollage />
        </Container>
    )
}
export default About