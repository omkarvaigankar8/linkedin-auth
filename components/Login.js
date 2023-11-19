import { Button } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { data } = useSession()
    if (data) {
        return (
            <>
                Signed in as {data.user.email} <br />
                <Button fullWidth={true} color='primary' variant='contained' onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <Button fullWidth={true} color='primary' variant='contained' onClick={() => signIn()}>Sign in</Button>
        </>
    )
}