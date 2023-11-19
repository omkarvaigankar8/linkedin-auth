import { Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import styles from '../styles/Home.module.scss'
import stylesSignin from 'pages/auth/signin.module.scss'

const Contact = () => {
    return (
        <Container maxWidth={'xl'} className={styles.container}>
            <Box sx={{ flexGrow: 1, paddingTop: "60px", alignItems: 'center' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className={stylesSignin.bg_image}>
                        <img src='/arambol.jpg' />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ display: 'block', marginBottom: '40px', marginTop: { md: '40px', xs: '20px' } }}>
                            <Typography variant='h4' sx={{ marginBottom: '1rem' }}>Contact Us</Typography>
                            <Typography variant='body1' sx={{ marginBottom: '1rem' }}>Address:Arambol, Pernem Goa</Typography>
                            <Typography variant='body1' sx={{ marginBottom: '1rem' }}>Mobile: <a href="tel:9130681853">+919130681853</a></Typography>
                            <Typography variant='body1' sx={{ marginBottom: '1rem' }}>Email: <a href="mailto:omkarvaigankar8@gmail.com">omkarvaigankar8@gmail.com</a></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Contact