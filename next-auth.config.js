export default {
    providers: [
        {
            id: 'linkedin',
            name: 'LinkedIn',
            type: 'oauth',
            version: '2.0',
            scope: 'openid profile w_member_social email',
            params: { grant_type: 'authorization_code' },
            accessTokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
            authorizationUrl: 'https://www.linkedin.com/oauth/v2/authorization',
            profileUrl: 'https://api.linkedin.com/v2/',
            profile: (profile) => {
                return {
                    id: profile.id,
                    name: profile.localizedFirstName + ' ' + profile.localizedLastName,
                    email: profile.emailAddress,
                    image: profile.profilePicture.displayImage,
                };
            },
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            callbackUrl: 'https://linkedin-auth-yhsu.vercel.app/api/auth/callback/linkedin'
        },
    ],
};
