import { createContext, useContext, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (data === null && router.asPath === '/profile') {
            router.push('/');
        }
    }, [data, router]);

    return <AuthContext.Provider value={{ session: data }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};