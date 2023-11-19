import NextAuth from "next-auth"
// import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";
export const LinkedinProvider = (config) => ({
    id: "linkedin",
    name: "LinkedIn",
    type: "oauth",
    client: { token_endpoint_auth_method: "client_secret_post" },
    issuer: "https://www.linkedin.com",
    profile: (profile) => ({
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
    }),
    wellKnown: "https://www.linkedin.com/oauth/.well-known/openid-configuration",
    authorization: {
        params: {
            scope: "openid profile email",
        },
    },
    style: { logo: "/linkedin.svg", bg: "#069", text: "#fff" },
    ...config,
});
export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        signIn: '/auth/signin',
        // other page configurations...
    },
    providers: [
        LinkedinProvider({
            clientId: process.env.LINKEDIN_ID,
            clientSecret: process.env.LINKEDIN_SECRET,
        }
        ),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)
