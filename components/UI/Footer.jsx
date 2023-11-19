import { Container, Grid, Box, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from 'context/authContext';
import Link from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import { LinkedIn, GitHub, Instagram, Facebook } from '@mui/icons-material';
import styles from 'styles/Home.module.scss'
const Footer = () => {
    const pages = [
        {
            name: 'Profile',
            link: "/profile",
            isAuth: true
        },
        {
            name: 'About',
            link: "/about",
            isAuth: false
        },
        {
            name: 'Contact Us',
            link: "/contact",
            isAuth: false
        },
    ];
    const { session } = useAuth();

    return (
        <footer>
            <Container maxWidth={'xl'}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={2} sx={{ marginBottom: '1rem' }} >
                            {/* <Item>xs=4</Item> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}><AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                                <Typography
                                    variant="span"
                                    noWrap
                                    component="a"
                                    href="/ "
                                    sx={{
                                        mr: 2,
                                        display: { md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid className={styles.footerlinks} xs={12} sm={12} md={7} sx={{ paddingTop: '1rem', paddingLeft: { xs: '16px' } }} >
                            {/* <Item>xs=8</Item> */}
                            {pages.map((page) => (
                                <>
                                    {page.isAuth === true && session === null ? null :
                                        <Link key={page.link} href={page.link}><Typography sx={{ marginBottom: '1rem' }} >{page.name}</Typography></Link>
                                    }
                                </>
                            ))}
                        </Grid>
                        <Grid xs={12} sm={12} md={2} sx={{ paddingTop: '1rem', paddingLeft: { xs: '16px' } }}>
                            {/* <Item>xs=4</Item> */}
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }}>Social Media</Typography>
                            <Grid maxWidth={'xl'} sx={{ display: "flex", gap: '0.825rem' }}>
                                <Link className='links' target='_blank' href="https://www.linkedin.com/in/omkar-vaigankar"><LinkedIn /></Link>
                                <Link className='links' target='_blank' href="https://github.com/omkarvaigankar8"><GitHub /></Link>
                                <Link className='links' target='_blank' href="https://www.facebook.com/vj.omkar"><Facebook /></Link>
                                <Link className='links' target='_blank' href="https://www.instagram.com/omkar__vaigankar"><Instagram /></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Typography sx={{ textAlign: { xs: "left", md: "center" }, marginTop: { xs: "20px", md: "40px" } }} variant='body1'>Copyright ©All rights reserved</Typography>
            </Container>
        </footer>
    )
}

export default Footer