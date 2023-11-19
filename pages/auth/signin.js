// signin.js
import React, { useEffect } from 'react'
import { Container, Box, Grid, Button, Paper, Typography } from "@mui/material";
import { getProviders, signIn, useSession } from "next-auth/react";
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import styles from './signin.module.scss'
import { useRouter } from 'next/router';
function SignIn({ providers }) {
    const { data } = useSession()
    const router = useRouter();
    useEffect(() => {
        if (data) {
            router.push('/')
        }
    }, [data])
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="container flex-center">
                <div className={styles.login_container} elevation={3}>
                    <div className={styles.login_box} height={'100%'}
                    >

                        <div className={styles.bg_image} >
                            <img src='/unlocked.jpg' />
                        </div>
                        <div className={styles.context_wrapper} item xs={6}>
                            <ContentBox>
                                <Typography variant='h5'>Unlock  Exclusive Features and Network Opportunities!</Typography>
                                <Typography variant='h6'>Why Login with LinkedIn?</Typography>
                                <Typography variant='p'>Connect with a single click and experience a personalized journey on Linkedin. We've partnered with LinkedIn to enhance your experience and offer you exclusive benefits.</Typography>
                                {Object.values(providers).map((provider) => (
                                    <Box key={provider.id}>
                                        <Button fullWidth={true} color='primary' variant='contained' onClick={() => signIn(provider.id)}>
                                            Sign in with {provider.name}
                                        </Button>
                                    </Box>
                                ))}
                            </ContentBox>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment >

    );
}

export default SignIn;

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
const LoginBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const ContentBox = styled.div`
padding:1.5rem;
h5,h6,p{
    margin-bottom:0.825rem;
}
button{
    margin-top:1.5rem;
}
`;
const LoginContainer = styled.div`
    width: 800px;
    
`;
const TextContentBox = styled.div`

`;
const BoxWrapper = styled.div`
    height:100vh;
display:flex;
    align-items:center;
    justify-content:center;
`;
const BackgroundImage = styled.div`
    flex-basis:50%;
    img{width: 100%;
        /* object-fit */
    height: 400px;}
    /* background: url('../unlocked.jpg') no-repeat center;
    background-size: cover; */
`;

